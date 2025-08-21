import { Component } from "react";
interface ChildrenMe {
  name: string;
}
export default class Childrn_Comp extends Component<ChildrenMe> {
  render() {
    return <div>Name Children: {this.props.name}</div>;
  }
}
