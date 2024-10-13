import NextAuth from "next-auth";
import  Credentials from "next-auth/providers/credentials";


export const {handlers,signIn,signOut,auth} =  NextAuth({
    providers:[
        Credentials({
            async authorize(credentials){
                let user = null;

                //va;lidate credentials 

                //get user
                user ={
                    id:'1',
                    name:'xyz',
                    email:'rrttt@gmail.com'
                }

                if(!user){
                    console.log("user does not exist");

                    
                    return null;
                    


                }

                return user;

            }

        })
    ]
})