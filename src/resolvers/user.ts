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
import { COOKIE_NAME } from "../constants";
import { UsernamePasswordInput } from "../types";
import { validateRegister } from "../utils/validateRegister";

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
