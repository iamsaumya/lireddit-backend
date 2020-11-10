import {
  Arg,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware
} from "type-graphql";
import { MyContext, PaginatedPosts, PostInput } from "../types";
import { Post } from "../entities/Post";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.slice(0, 50);
  }

  @Query(() => PaginatedPosts) // what will the query return
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string,
    @Ctx() {}: MyContext /*Ts*/
  ): Promise<PaginatedPosts> /*ts*/ {
    const realLimit = Math.min(20, limit);
    const realLimitPlusOne = realLimit + 1;

    const replacements: any[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    //there can be multple user table
    let posts = await getConnection().query(
      `
      select p.*, json_build_object('id',u.id,'username',u.username,'email',u.email) creator from post p 
      inner join public.user u on u.id = p."creatorId"
      ${cursor ? `where p."createdAt" < $2` : ""}
      order by p."createdAt" DESC
      limit $1
    `,
      replacements
    );
    // posts = posts.map((p) => {
    //   const { username, email, ...post } = p;
    //   return {
    //     ...post,
    //     creator: {
    //       username,
    //       email
    //     }
    //   };
    // });
    // console.log(posts);
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne
    };
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
