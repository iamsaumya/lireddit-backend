import "reflect-metadata"
import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import  microConfig from './mikro-orm.config'
import dotenv from 'dotenv'
import express from 'express'
import {buildSchema} from 'type-graphql'
import {ApolloServer} from 'apollo-server-express'
import {UserResolver} from './resolvers/user'
import { PostResolver } from "./resolvers/post";

dotenv.config();

const main = async () => {
    const orm =  await MikroORM.init(microConfig)
    await orm.getMigrator().up(); // to automatically make migrations
    const apolloserver = new ApolloServer({
        schema: await buildSchema({ // apollo and typeGraphQL are different things, essentialy typeGraphQL is helping us defining the schema, queires, mutations. 
            // build schema is typegraphql function to create schema, it basically will create everyting for us.
            resolvers: [PostResolver,UserResolver],
            validate: false
        }),
        context: ()=> ({em: orm.em}) // context is an object available to all the resolvers.
    })

    const app = express();
    apolloserver.applyMiddleware({app}); // we have installed apollo-experss-server

    app.listen(process.env.PORT,()=>{
        console.log("server is running on", process.env.PORT);
    })
}

main().catch(err => {
    console.error(err)
})