import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType() // add this line to convert schema to GraphQL schema
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String) // adding type of the field for GraphQL
  @UpdateDateColumn()
  updatedAt: Date;

  @Field() // for string type it automatically does for us
  @Column()
  title!: string;
}
