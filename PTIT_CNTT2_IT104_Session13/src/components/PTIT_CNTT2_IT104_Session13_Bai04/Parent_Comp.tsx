import { Component } from "react";
import Children_Comp from "./Childrn_Comp";
interface Me {
  name: string;
}
export default class Parent_Comp extends Component<object, Me> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "Cao Chi Thien",
    };
  }
  render() {
    return (
      <div>
        <h3>Bai 4</h3>
        <p>Name Parent: {this.state.name}</p>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
