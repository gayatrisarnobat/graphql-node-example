const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const expressPlayground =
  require('graphql-playground-middleware-express').default;
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});
const resolversArray = loadFilesSync('**/*', {
  extensions: ['resolvers.js'],
});

const startApolloServer = async () => {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

  app.listen(3000, () => {
    console.log(`Running GraphQL Server...`);
  });
};

startApolloServer();
