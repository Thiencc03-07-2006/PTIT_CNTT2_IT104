const products = [
  { name: "A", price: 100, discount: 0.1, quantity: 2 },
  {
    name: "B",
    price: 200,
    discount: 0.2,
    quantity: 1,
    bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 },
  },
  {
    name: "C",
    price: 300,
    discount: 0,
    quantity: 3,
    bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 },
  },
];
const getOrderSummary = (products) => {
  let details = [...products].map((target) => {
    let finalPrice =
      (1 -
        (target.discount +
          (target.bulkDiscount
            ? target.quantity >= target.bulkDiscount.minQuantity
              ? target.bulkDiscount.extraDiscount
              : 0
            : 0))) *
      target.price;
    let subTotal = finalPrice * target.quantity;
    return {
      name: target.name,
      finalPrice,
      quantity: target.quantity,
      subTotal,
    };
  });
  return {
    totalBeforeDiscount: products.reduce((a, b) => a + b.price * b.quantity, 0),
    totalAfterDiscount: details.reduce((a, b) => a + b.subTotal, 0),
    details,
  };
};
console.log(getOrderSummary(products));
