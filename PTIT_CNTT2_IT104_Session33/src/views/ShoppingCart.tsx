import ListProducts from "./ListProducts";
import Cart from "./Cart";
export default function ShoppingCart() {
  return (
    <div className="flex gap-[2vw]">
      <ListProducts />
      <Cart />
    </div>
  );
}
