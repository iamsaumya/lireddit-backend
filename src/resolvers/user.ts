import { User } from "../entities/User";
import { MyContext } from "../types";
import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Resolver } from "type-graphql";
import argon2 from 'argon2';


@InputType()
class UsernamePasswordInput{

    @Field()
    username!: string

    @Field()
    password!: string
}

@ObjectType()
class fieldError {
    @Field()
    field: string

    @Field()
    message:string
}

@ObjectType()
class userResponse{
    @Field(()=>[fieldError],{nullable:true}) // we have to specify the return type because we have to make nullable is true
    errors?: fieldError[] 

    @Field(()=>User,{nullable:true})
    user?: User
}

@Resolver()
export class UserResolver{

    @Mutation(() => userResponse)
    async register(@Arg('options') options:UsernamePasswordInput, @Ctx() {em}: MyContext) : Promise<userResponse>{

        if(options.username.length <= 2){
            return {
                errors:[{
                    field:"username",
                    message:"username must be at least 3 char"
                }]
            }
        }
        if(options.password.length <= 3){
            return {
                errors:[{
                    field:"password",
                    message:"password must be at least 4 char"
                }]
            }
        }

        const hashedPassword = await argon2.hash(options.password);
        const user = em.create(User,{
            username: options.username.toLowerCase(),
            password: hashedPassword
        })
        try{
            await em.persistAndFlush(user);
        }
        catch(error){
            console.log(error)
            return{
                errors:[{
                    field:"username or password",
                    message: error.message
                }]
            }
        }
        return {user};
    }

    @Mutation(() => userResponse)
    async login(@Arg('options') options:UsernamePasswordInput, @Ctx() {em}: MyContext) : Promise<userResponse>{

        const user = await em.findOne(User,{username: options.username.toLowerCase()});
        if(!user){
            return {
                errors:[{
                    field:"username",
                    message: "username does not exist"
                }
                ]
            }
        }

        const valid = await argon2.verify(user.password,options.password);

        if(!valid){
            return {
                errors:[
                    {
                        field:"password",
                        message:"incorrect password"
                    }
                ]
            }
        }

        return {
            user
        }
    }
}