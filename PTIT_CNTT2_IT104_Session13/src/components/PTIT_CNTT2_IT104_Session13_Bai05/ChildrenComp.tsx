import { Component } from "react";
interface Product {
  id: number;
  productName: string;
  price: number;
  quantily: number;
}
interface ChildrenProduct {
  product: Product;
}
export default class ChildrenComp extends Component<ChildrenProduct> {
  render() {
    return (
      <div>
        <p>Du lieu trong component con</p>
        <ul>
          {Object.entries(this.props.product).map(([key, value]) => (
            <li key={key}>
              {key}:{" "}
              {key === "price" ? value.toLocaleString("vi-VN") + " " : value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
