const orders = [
  {
    date: '2010-05-05',
    subtotal: 90.22,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Old red Shoe',
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};

module.exports = {
  getAllOrders,
};
