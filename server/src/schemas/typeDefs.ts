const typeDefs = `
type User {
  _id: ID!
  username: String!
  email: String!
  # Add additional fields here if needed, such as 'thoughts', 'friends', etc.
}

type Book {
  _id: ID!
  title: String!
  author: String!
  genre: String!
}

# Type for the authentication payload, returning a token and user.
type AuthPayload {
  token: String!
  user: User!
}

# Queries for retrieving user information
type Query {
  users: [User!]!
  user(username: String!): User
  me: User
  getBooks(title: String, author: String, genre: String): [Book!]!
}

# Input type for the addUser mutation, containing necessary fields.
input AddUserInput {
  username: String!
  email: String!
  password: String!
}

# Mutations for user registration and login
type Mutation {
  addUser(input: AddUserInput!): AuthPayload!
  login(email: String!, password: String!): AuthPayload!
  addBook(title: String!, author: String!, genre: String!): Book!
}
`;

export default typeDefs;