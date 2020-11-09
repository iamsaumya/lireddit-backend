import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { COOKIE_NAME, __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";
import path from "path";
dotenv.config();

const main = async () => {
  await createConnection({
    username: "postgres",
    password: "postgres",
    type: "postgres",
    database: "lireddit2",
    logging: true,
    synchronize: true, //sync entities with db
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [User, Post],
    port: 5432
  });

  const app = express();
  let RedisStore = connectRedis(session);
  let redis = new Redis();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
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
    context: ({ req, res }): MyContext => ({
      req,
      res,
      redis
    }) // context is an object available to all the resolvers.
  });

  apolloserver.applyMiddleware({ app, cors: false }); // we have installed apollo-experss-server

  app.listen(process.env.PORT, () => {
    console.log("server is running on", process.env.PORT);
  });
};

main().catch((err) => {
  console.error(err);
});
