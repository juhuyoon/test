import express from 'express';
import db from './config/connection.js';
import dotenv from 'dotenv';
import openLibraryRoutes from './routes/api/openLibraryRoutes.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(import.meta.url);

// Import the ApolloServer class
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// Import the two parts of a GraphQL schema
import { typeDefs, resolvers } from './schemas/index.js';

dotenv.config(); 

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {

  await server.start();
  console.log('APOLLO SERVER RUNNING!');
  await db();
  console.log('Connected to MongoDB!');

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../../client/dist')));
    // console.log(path.join(__dirname, '/client/dist'));
    console.log(path.join(__dirname, '../../../client/dist/index.html'));
    // app.use(express.static(path.join(new)))

    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
    });
  }
  // console.log(__dirname);
  // Set up other API routes
  app.use('/api/openlibrary', openLibraryRoutes);

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();