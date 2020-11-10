import { Request, Response } from "express";
import { Field, InputType, ObjectType } from "type-graphql";
import { Redis } from "ioredis";
import { Post } from "./entities/Post";
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

@ObjectType()
export class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];

  @Field()
  hasMore: boolean;
}
