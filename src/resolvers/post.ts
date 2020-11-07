import {
  Arg,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware
} from "type-graphql";
import { MyContext, PostInput } from "../types";
import { Post } from "../entities/Post";
import { isAuth } from "../middleware/isAuth";

@Resolver()
export class PostResolver {
  @Query(() => [Post]) // what will the query return
  async posts(@Ctx() {}: MyContext /*Ts*/): Promise<Post[]> /*ts*/ {
    return Post.find();
  }

  @Query(() => Post, { nullable: true })
  post(
    @Arg("id", () => Int) id: number,
    @Ctx() {}: MyContext
  ): Promise<Post | undefined> {
    return Post.findOne(id);
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    return Post.create({ ...input, creatorId: req.session?.userID }).save();
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("title", () => String) title: string,
    @Arg("id", () => Int) id: number,
    @Ctx() {}: MyContext
  ): Promise<Post | undefined> {
    const post = await Post.findOne(id);
    if (!post) {
      return undefined;
    }

    if (typeof title != undefined) {
      await Post.update({ id }, { title }); //bug
    }
    return post;
  }
  @Mutation(() => Boolean)
  async deletePostById(
    //potential bug
    @Arg("id", () => Int) id: number,
    @Ctx() {}: MyContext
  ): Promise<boolean> {
    await Post.delete({ id });
    return true;
  }
}
