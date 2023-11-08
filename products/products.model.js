const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
  },
];

const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (minPrice, maxPrice) => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
