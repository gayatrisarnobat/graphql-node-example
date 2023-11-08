const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
    reviews: [],
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

const addNewProduct = (productId, description, price) => {
  const newProduct = {
    id: productId,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};

const addNewProductReview = (productId, rating, comment) => {
  const existingProduct = products.find((prod) => prod.id === productId);
  if (existingProduct) {
    const newReview = {
      rating,
      comment,
    };
    existingProduct.reviews.push(newReview);
    return newReview;
  }
  return null;
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
