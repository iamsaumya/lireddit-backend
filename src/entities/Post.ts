import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType() // add this line to convert schema to GraphQL schema
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field() // for string type it automatically does for us
  @Column()
  title!: string;

  @Field() // for string type it automatically does for us
  @Column()
  text!: string;

  @Field() // for string type it automatically does for us
  @Column({ type: "int", default: 0 })
  points!: number;

  @Field()
  @Column()
  creatorId: number;

  @Field()
  @ManyToOne(() => User, (user) => user.posts)
  creator: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String) // adding type of the field for GraphQL
  @UpdateDateColumn()
  updatedAt: Date;
}
