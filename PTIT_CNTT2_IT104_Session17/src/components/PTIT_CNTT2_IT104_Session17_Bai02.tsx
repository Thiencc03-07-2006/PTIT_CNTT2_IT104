import { useState } from "react";

export default function PTIT_CNTT2_IT104_Session17_Bai02() {
  const [product] = useState({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10,
  });
  return (
    <div>
      <h3>Bai 2</h3>
      <h4>Thong tin san pham</h4>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}
