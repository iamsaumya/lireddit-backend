import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver{
    @Query(returns => String)
    hello(){
        return "hello there!"
    }

}