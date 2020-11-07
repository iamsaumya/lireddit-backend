import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  console.log(context.req.session);
  if (!context.req.session?.userID) {
    throw new Error("not authenticated");
  }
  return next();
};
