import { useMemo, useState } from "react";
interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const cartItems: Item[] = [
  { id: 1, name: "San pham 1", price: 100000, quantity: 2 },
  { id: 2, name: "San pham 2", price: 200000, quantity: 1 },
];

export default function ShoppingCart() {
  const [cart] = useState(cartItems);
  const totalCost = (arr: Item[]) =>
    arr.reduce((a, b) => a + b.price * b.quantity, 0);
  const total = useMemo(() => totalCost(cart), [cart]);
  return (
    <div>
      <h3>Bai 1</h3>
      <div>
        {cart.map((t) => (
          <p key={t.id}>
            Id: {t.id} Name: {t.name} Price: {t.price} Quantity: {t.quantity}
          </p>
        ))}
      </div>
      <p>Total cost: {total}</p>
    </div>
  );
}
