import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { COOKIE_NAME, __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { UserResolver } from "./resolvers/user";
import { PostResolver } from "./resolvers/post";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { MyContext } from "./types";

dotenv.config();

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up(); // to automatically make migrations

  const app = express();

  let RedisStore = connectRedis(session);
  let redisClient = redis.createClient();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redisClient, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__ //cookie only works in http
      },
      saveUninitialized: false, //create session even if there is no data
      secret: "plwdmkcjnvrueutybzx",
      resave: false
    })
  );

  const apolloserver = new ApolloServer({
    schema: await buildSchema({
      // apollo and typeGraphQL are different things, essentialy typeGraphQL is helping us defining the schema, queires, mutations.
      // build schema is typegraphql function to create schema, it basically will create everyting for us.
      resolvers: [PostResolver, UserResolver],
      validate: false
    }),
    context: ({ req, res }): MyContext => ({ em: orm.em.fork(), req, res }) // context is an object available to all the resolvers.
  });

  apolloserver.applyMiddleware({ app, cors: false }); // we have installed apollo-experss-server

  app.listen(process.env.PORT, () => {
    console.log("server is running on", process.env.PORT);
  });
};

main().catch((err) => {
  console.error(err);
});
