
import { ApolloServer, gql } from "apollo-server";

// import { ApolloServer , gql } from 'apollo-server';

const typeDefs = gql`
    type User{
        name: String!
    }

    type Query{
        users : [User!]!
    }
`;

const resolvers = {
    Query : {

    }
}


const server = new ApolloServer({ typeDefs , resolvers});

server.listen().then(({url})=>{
    console.log(` Qraph QL server is running ${url}`);
})