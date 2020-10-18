import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType() // add this line to convert schema to GraphQL schema
@Entity()
export class User {

  @Field()
  @PrimaryKey()
  id!: number;
  
  @Field(() => String)
  @Property({type: 'date'})
  createdAt = new Date();

  @Field(()=> String) // adding type of the field for GraphQL
  @Property({ type: 'date',onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field() // for string type it automatically does for us
  @Property({type: 'text',unique:true})
  username!: string;

  @Property({type:'text'})
  password!:string
} 