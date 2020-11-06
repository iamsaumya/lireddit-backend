import { Request, Response } from "express";
import { Field, InputType } from "type-graphql";
import { Redis } from "ioredis";
export type MyContext = {
  req: Request;
  res: Response;
  redis: Redis;
};

@InputType()
export class UsernamePasswordInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
export class PostInput {
  @Field()
  title!: string;

  @Field()
  text!: string;
}
