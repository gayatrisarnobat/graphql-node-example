const path = require('path');
const express = require('express');
const { createHandler } = require('graphql-http/lib/use/http');
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
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const handler = createHandler({ schema });

const app = express();

app.use('/graphql', handler);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(3000, () => {
  console.log(`Running GraphQL Server...`);
});
