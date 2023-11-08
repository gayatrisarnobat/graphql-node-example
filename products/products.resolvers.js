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
    productsByPrice: (_, args) => {
      const { min, max } = args;
      console.log(`Getting the products between ${min} - ${max}`);
      return productsModel.getProductsByPrice(min, max);
    },
    productById: (_, args) => {
      const { id } = args;
      console.log(`Getting the product by id: ${id}`);
      return productsModel.getProductById(id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      const { id, description, price } = args;
      console.log('Adding new product: ', id, description, price);
      return productsModel.addNewProduct(id, description, price);
    },
    addNewProductReview: (_, args) => {
      const { id, rating, comment } = args;
      return productsModel.addNewProductReview(id, rating, comment);
    },
  },
};
