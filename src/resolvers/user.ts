import { User } from "../entities/User";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver
} from "type-graphql";
import argon2 from "argon2";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
import { UsernamePasswordInput } from "../types";
import { validateRegister } from "../utils/validateRegister";
import { v4 } from "uuid";
import { sendEmail } from "../utils/sendEmails";

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

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async Me(@Ctx() { em, req }: MyContext): Promise<User | null> {
    if (!req.session?.userID) return null;
    else {
      return await em.findOne(User, { id: req.session.userID });
    }
  }

  @Mutation(() => userResponse)
  async changePassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() { redis, em, req }: MyContext
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

    const user = await em.findOne(User, { id: parseInt(userId) });

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

    user.password = await argon2.hash(newPassword);
    await em.persistAndFlush(user);

    req.session!.userId = user.id;

    return { user };
  }
  @Mutation(() => userResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<userResponse> {
    const errors = validateRegister(options);
    if (errors !== null) {
      return { errors };
    }
    console.log("here");
    const hashedPassword = await argon2.hash(options.password);
    const user = em.create(User, {
      email: options.email.toLowerCase(),
      username: options.username.toLowerCase(),
      password: hashedPassword
    });
    try {
      await em.persistAndFlush(user);
    } catch (error) {
      console.log(error);
      if (error.constraint === "user_email_unique") {
        return {
          errors: [
            {
              field: "email",
              message: "email already taken"
            }
          ]
        };
      }
      if (error.constraint === "user_username_unique") {
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
    @Ctx() { em, req }: MyContext
  ): Promise<userResponse> {
    const user = await em.findOne(
      User,
      usernameOrEmail.includes("@")
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail }
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
    @Ctx() { em, redis }: MyContext
  ): Promise<Boolean> {
    const user = await em.findOne(User, { email });
    if (!user) {
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
