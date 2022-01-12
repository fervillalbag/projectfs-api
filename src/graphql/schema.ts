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

  type ReviewItem {
    id: String
    name: String
    avatar: String
    description: [Description]
  }

  type ReviewHome {
    id: ID
    title: String
    reviews: [ReviewItem]
  }

  type AboutPage {
    id: ID
    title: String
    description: [Description]
    image: String
  }

  type Product {
    id: ID
    name: String
    code: Int
    price: Int
    image: String
    description: [Description]
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

  input ReviewItemInput {
    id: String
    name: String
    avatar: String
    description: [DescriptionInput]
  }

  input ReviewHomeInput {
    title: String
    reviews: [ReviewItemInput]
  }

  input AboutPageInput {
    title: String
    description: [DescriptionInput]
    image: String
  }

  input ProductInput {
    name: String
    code: Int
    price: Int
    image: String
    description: [DescriptionInput]
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

    # Review
    getReviewHome: ReviewHome

    # About
    getAboutPage: AboutPage

    # Product
    getProducts: [Product]
    getProduct(id: ID!): Product
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

    # Review
    createReviewHome(input: ReviewHomeInput!): MutationResponse
    updateReviewHome(input: ReviewHomeInput): MutationResponse

    # About
    createAboutPage(input: AboutPageInput!): MutationResponse
    updateAboutPage(input: AboutPageInput): MutationResponse

    # Product
    createProduct(input: ProductInput!): MutationResponse
    updateProduct(input: ProductInput): MutationResponse
  }
`;

export default typeDefs;
