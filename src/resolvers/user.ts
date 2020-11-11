import { User } from "../entities/User";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root
} from "type-graphql";
import argon2 from "argon2";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
import { UsernamePasswordInput } from "../types";
import { validateRegister } from "../utils/validateRegister";
import { v4 } from "uuid";
import { sendEmail } from "../utils/sendEmails";
import { getConnection } from "typeorm";
import e from "express";

@ObjectType()
class fieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class userResponse {
  @Field(() => [fieldError], { nullable: true }) // we have to specify the return type because we have to make nullable is true
  errors?: fieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() { req }: MyContext) {
    if (user.id === req.session?.userID) {
      //this is current user/
      return user.email;
    } else return "";
  }

  @Query(() => User, { nullable: true })
  async Me(@Ctx() { req }: MyContext): Promise<User | undefined> {
    if (!req.session?.userID) return undefined;
    else {
      return await User.findOne(req.session.userID);
    }
  }

  @Mutation(() => userResponse)
  async changePassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() { redis, req }: MyContext
  ): Promise<userResponse> {
    if (newPassword.length <= 2) {
      return {
        errors: [
          {
            field: "newPassword",
            message: "length must be greater than 2"
          }
        ]
      };
    }

    const userId = await redis.get(FORGET_PASSWORD_PREFIX + token);
    if (!userId) {
      return {
        errors: [
          {
            field: "token",
            message: "token expired"
          }
        ]
      };
    }

    const userIdNum = parseInt(userId);
    const user = await User.findOne(userIdNum);

    if (!user) {
      return {
        errors: [
          {
            field: "token",
            message: "user does not exists"
          }
        ]
      };
    }

    await User.update(
      { id: userIdNum },
      { password: await argon2.hash(newPassword) }
    );
    await redis.del(FORGET_PASSWORD_PREFIX + token);
    req.session!.userID = user.id;
    return { user };
  }
  @Mutation(() => userResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<userResponse> {
    const errors = validateRegister(options);
    if (errors !== null) {
      return { errors };
    }
    console.log("here");
    const hashedPassword = await argon2.hash(options.password);
    let user;
    try {
      const response = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
          {
            username: options.username,
            email: options.email,
            password: hashedPassword
          }
        ])
        .returning("*")
        .execute();
      user = response.raw[0];
    } catch (error) {
      console.log(error);
      if (error.constraint === "UQ_e12875dfb3b1d92d7d7c5377e22") {
        return {
          errors: [
            {
              field: "email",
              message: "email already taken"
            }
          ]
        };
      }
      if (error.constraint === "UQ_78a916df40e02a9deb1c4b75edb") {
        return {
          errors: [
            {
              field: "username",
              message: "username already taken"
            }
          ]
        };
      }
    }
    //store the cookie when someone registers
    req.session!.userID = user.id;

    return { user };
  }

  @Mutation(() => userResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<userResponse> {
    const user = await User.findOne(
      usernameOrEmail.includes("@")
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );

    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "usernameOrEmail does not exist"
          }
        ]
      };
    }

    const valid = await argon2.verify(user.password, password);

    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password"
          }
        ]
      };
    }

    req.session!.userID = user.id;
    return {
      user
    };
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ): Promise<Boolean> {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("user not found for", email);
      return true;
    }

    const token = v4();
    redis.set(
      FORGET_PASSWORD_PREFIX + token,
      user.id,
      "ex",
      1000 * 60 * 60 * 24 * 3
    );
    await sendEmail(
      email,
      `<a href="http://localhost:3000/change-password/${token}">Reset Password</a>`
    );
    return true;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext): Promise<Boolean> {
    return new Promise((resolve) =>
      req.session?.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
