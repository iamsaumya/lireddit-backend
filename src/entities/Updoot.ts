import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@ObjectType() // add this line to convert schema to GraphQL schema
@Entity()
export class Updoot extends BaseEntity {
  @Field()
  @PrimaryColumn()
  userId: number;

  @Field() // for number type it automatically does for us
  @Column({ type: "int" })
  value: number;

  @Field()
  @PrimaryColumn()
  postId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.updoots)
  user: User;

  @Field(() => Post)
  @ManyToOne(() => Post, (post) => post.updoots)
  post: Post;
}
