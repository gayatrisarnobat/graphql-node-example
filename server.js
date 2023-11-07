const path = require('path');
const express = require('express');
const { createHandler } = require('graphql-http/lib/use/http');
const expressPlayground =
  require('graphql-playground-middleware-express').default;
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const products = require('./products/products.model');
const orders = require('./orders/orders.model');

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});
const schema = makeExecutableSchema({
  typeDefs: typesArray,
});

const root = {
  products,
  orders,
};

const handler = createHandler({ schema, rootValue: root });

const app = express();

app.use('/graphql', handler);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(3000, () => {
  console.log(`Running GraphQL Server...`);
});
