import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID
    name: String
    lastname: String
    username: String
    email: String
    password: String
    avatar: String
    role: String
    createdAt: String
  }

  type MutationResponse {
    message: String
    success: Boolean
  }

  input CreateUser {
    name: String
    lastname: String
    password: String
    email: String
    username: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUser!): MutationResponse
  }
`;

export default typeDefs;
