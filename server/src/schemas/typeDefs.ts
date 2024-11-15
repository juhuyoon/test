const typeDefs = `
  type User {
    _id: ID
    first_name: String
    last_name: String
    username: String
    email: String
    password: String
  }
  
  type Query {
    user: User
  }
`;

export default typeDefs;
