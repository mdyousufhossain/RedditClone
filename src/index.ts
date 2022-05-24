import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constant";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express = require("express");
import {ApolloServer , gql} from   "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { Server } from "http";

const main = async () => {
    
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    
    
    const app = express();
    


    const  apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers:[HelloResolver],
            validate:false,
        }),

    });
    await apolloServer.start();

    apolloServer.applyMiddleware({app});


    app.listen(4000, ()=>{
        console.log('localhost :400')
    })  
    // const post = orm.em.create(Post,{
    //       title: "myfirstpost"
    // } as RequiredEntityData<Post>);   
    // await orm.em.persistAndFlush(post);
    
    // const posts = await orm.em.find(Post,{});
    // console.log(posts)
};

main().catch((err) =>{
    console.error(err);
})