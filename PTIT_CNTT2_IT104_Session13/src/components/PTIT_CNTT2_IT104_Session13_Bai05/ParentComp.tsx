import { Component } from "react";
import ChildrenComp from "./ChildrenComp";
interface Product {
  id: number;
  productName: string;
  price: number;
  quantily: number;
}
export default class ParentComp extends Component<object, Product> {
  constructor(props: object) {
    super(props);
    this.state = {
      id: 1,
      productName: "Buoi ba roi",
      price: 12000,
      quantily: 6,
    };
  }
  render() {
    return (
      <div>
        <h3>Bai 5</h3>
        <ChildrenComp product={this.state} />
      </div>
    );
  }
}
