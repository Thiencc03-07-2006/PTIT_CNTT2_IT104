interface Product {
  readonly id: string;
  name: string;
  price: number;
}
interface OrderItem {
  product: Product;
  quantity: number;
}
interface Order {
  orderId: string;
  customer: string;
  items: OrderItem[];
  note?: string;
}
let order: Order = {
  orderId: "#ORD001",
  customer: "An",
  items: [
    {
      product: {
        id: "P1",
        name: "Ao so mi",
        price: 250000,
      },
      quantity: 2,
    },
    {
      product: {
        id: "P2",
        name: "Quan tay",
        price: 400000,
      },
      quantity: 1,
    },
  ],
  note: "Giao sau 18h",
};
const toVND = (price: number) =>
  new Intl.NumberFormat("vi-VN").format(price) + " VND";
const calculateOrderTotal = (order: Order) => {
  return order.items.reduce((a, b) => a + b.product.price * b.quantity, 0);
};
const printOrder = (order: Order) => {
  console.log("Don hang " + order.orderId);
  console.log("Khanh hang: " + order.customer);
  console.log("San pham:");
  order.items.map((target) =>
    console.log(
      "- " +
        target.product.name +
        " x " +
        target.quantity +
        " -> " +
        toVND(target.product.price * target.quantity)
    )
  );
  console.log("Tong cong " + toVND(calculateOrderTotal(order)));
  if (order.note) console.log("Ghi chu: " + order.note);
};
printOrder(order);
