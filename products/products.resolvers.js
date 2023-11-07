const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: async () => {
      /*
      args: Used for parameterized queries
      context: pass down data across resolvers
      info: information about our current state of operation
      */
      console.log('Getting the products');
      return await Promise.resolve(productsModel.getAllProducts());
    },
  },
};
