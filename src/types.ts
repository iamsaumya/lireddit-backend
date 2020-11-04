import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Field, InputType } from "type-graphql";
export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: Request;
  res: Response;
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
