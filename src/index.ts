import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import  microConfig from './mikro-orm.config'
import dotenv from 'dotenv'
import express from 'express'
import {buildSchema} from 'type-graphql'
import {ApolloServer} from 'apollo-server-express'
import {HelloResolver} from './resolvers/hello'

dotenv.config();

const main = async () => {
    const orm =  await MikroORM.init(microConfig)
    await orm.getMigrator().up();
    const apolloserver = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        })
    })

    const app = express();
    apolloserver.applyMiddleware({app});

    app.listen(process.env.PORT,()=>{
        console.log("server is running on", process.env.PORT);
    })
}

main().catch(err => {
    console.error(err)
})