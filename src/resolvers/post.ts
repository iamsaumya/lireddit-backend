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
import { Updoot } from "../entities/Updoot";

type voteType = 1 | -1;

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.slice(0, 50);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg("value", () => Int) value: voteType,
    @Arg("postId", () => Int) postId: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const userId = req.session?.userID;
    const updoot = await Updoot.findOne({ where: { postId, userId } });

    if (updoot && updoot.value !== value) {
      await getConnection().transaction(async (tm) => {
        await tm.query(
          `
            update updoot set value = $1 where "postId" = $2 and "userId" = $3
          `,
          [value, postId, userId]
        );

        await tm.query(
          `
          update post set points = points + $1 where id = $2 
        `,
          [2 * value, postId]
        );
      });
    } else if (!updoot) {
      await getConnection().transaction(async (tm) => {
        await tm.query(
          `
            insert into updoot("userId","postId",value) values($1,$2,$3)
          `,
          [userId, postId, value]
        );

        await tm.query(
          `
          update post set points = points + $1 where id = $2 
        `,
          [value, postId]
        );
      });
    }
    return true;
  }
  @Query(() => PaginatedPosts) // what will the query return
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string,
    @Ctx() { req }: MyContext /*Ts*/
  ): Promise<PaginatedPosts> /*ts*/ {
    const realLimit = Math.min(20, limit);
    const realLimitPlusOne = realLimit + 1;
    const replacements: any[] = [realLimitPlusOne, req.session?.userID];

    if (replacements[1] === undefined) replacements[1] = null; // to remove the extra parameter in requirements array when not needed in prepared statements

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    //there can be multple user table
    let posts = await getConnection().query(
      `
      select p.*, json_build_object('id',u.id,'username',u.username,'email',u.email) creator,
      ${
        req.session?.userID
          ? '(select value from Updoot where "postId"= p.id and "userId"=$2) "voteStatus"'
          : '$2 as "voteStatus"'
      }
      from post p 
      inner join public.user u on u.id = p."creatorId"
      ${cursor ? `where p."createdAt" < $3` : ""}
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
  async post(
    @Arg("id", () => Int) id: number,
    @Ctx() {}: MyContext
  ): Promise<Post | undefined> {
    return Post.findOne(id, { relations: ["creator"] });
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
