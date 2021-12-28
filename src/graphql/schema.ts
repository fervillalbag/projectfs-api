import { gql } from "apollo-server";

const typeDefs = gql`
  # Types

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

  type Description {
    id: ID
    text: String
  }

  type HeaderHome {
    id: ID
    title: String
    description: [Description]
    image: String
    createdAt: String
  }

  type GrowthItem {
    id: ID
    title: String
    description: [Description]
  }

  type GrowthHome {
    id: ID
    title: String
    description: [Description]
    items: [GrowthItem]
    createdAt: String
  }

  # Inputs

  input CreateUser {
    name: String
    lastname: String
    password: String
    email: String
    username: String
  }

  input DescriptionInput {
    id: ID
    text: String
  }

  input HeaderHomeInput {
    title: String
    description: [DescriptionInput]
    image: String
  }

  input GrowthItemInput {
    id: String
    title: String
    description: [DescriptionInput]
  }

  input GrowthHomeInput {
    title: String
    description: [DescriptionInput]
    items: [GrowthItemInput]
  }

  # Query

  type Query {
    # User
    getUsers: [User]
    getUser(id: ID!): User

    # Header Home
    getHeaderHome: HeaderHome

    # Growth
    getGrowthHome: GrowthHome
  }

  type Mutation {
    # User
    createUser(input: CreateUser!): MutationResponse

    # Header Home
    createHeaderHome(input: HeaderHomeInput!): MutationResponse
    updateHeaderHome(input: HeaderHomeInput): MutationResponse

    # Growth
    createGrowthHome(input: GrowthHomeInput!): MutationResponse
    updateGrowthHome(input: GrowthHomeInput): MutationResponse
  }
`;

export default typeDefs;
