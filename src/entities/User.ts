import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from "typeorm";

@ObjectType() // add this line to convert schema to GraphQL schema
@Entity()
export class User extends BaseEntity {
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
  @Column({ unique: true })
  username!: string;

  @Field() // for string type it automatically does for us
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;
}
