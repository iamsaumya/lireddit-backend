import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import {MyContext} from '../types'
import {Post} from '../entities/Post';
import e from "express";
@Resolver()
export class PostResolver {

    @Query(() => [Post]) // what will the query return
    posts(@Ctx() {em}: MyContext /*Ts*/ ) : Promise<Post[]> /*ts*/{
        return em.find(Post,{});
    }

    @Query(() => Post, {nullable: true})
    post( @Arg('id',() => Int) id: number, @Ctx() {em}: MyContext) : Promise<Post | null>
    {
        return em.findOne(Post,{ id });
    }

    @Mutation(()=>Post)
   async createPost( @Arg('title',() => String) title: string,  @Ctx(){em}: MyContext):Promise<Post>{
    const post = em.create(Post,{title});
    await em.persistAndFlush(post);
    return post;
   }

    @Mutation(()=>Post,{nullable: true})
   async updatePost( @Arg('title',() => String) title: string, @Arg('id',() => Int) id: number, @Ctx(){em}: MyContext):Promise<Post | null>{
    const post = await em.findOne(Post,{id});
    if(!post){
        return null;
    }

    if(typeof title != undefined){
        post.title = title;
        await em.persistAndFlush(post);
    }
    return post;
   }
    @Mutation(()=> Boolean)
   async deletePostById( @Arg('id',() => Int) id: number, @Ctx(){em}: MyContext):Promise<boolean>{
    const post = await  em.nativeDelete(Post,{id});
    if(post){
        return true;
    }
    else{
        return false;
    }
   }
}