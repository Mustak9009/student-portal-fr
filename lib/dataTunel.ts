import {GraphQLClient} from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL as string;

export async function dataTunnel(query:string,variables?:{[key:string]:any}){ //variables?:{[key:string]:any fix the undifiend problem
    const graphqlClient = new GraphQLClient(API_URL,{ 
        headers:{
            authorization:`Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN_PUBLIC}`
        } 
    });
    try{
        const data = await graphqlClient.request(query,variables);
        return data;
    }catch(err){
        console.log(err);
        return null;
    }
}