import { Component } from "react";
interface Click {
  click: number;
}
export default class ClickCounter extends Component<object, Click> {
  state: Click = {
    click: 0,
  };
  handleClick = () => {
    this.setState({ click: this.state.click + 1 });
  };
  render() {
    return (
      <div>
        <h3>Bai 4</h3>
        <p>Click: {this.state.click}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
