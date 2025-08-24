import { Component } from "react";
interface Slogan {
  text: string;
}
export default class PTIT_CNTT2_IT104_Session14_Bai04 extends Component<
  object,
  Slogan
> {
  constructor(proms: object) {
    super(proms);
    this.state = { text: "Hoc code de" };
  }
  handleClick = () => {
    this.setState({
      text: this.state.text === "Hoc code de" ? "Ra de" : "Hoc code de",
    });
  };
  shouldComponentUpdate() {
    console.log(this.state.text);
    return false;
  }
  render() {
    return (
      <div>
        <h3>Bai 4</h3>
        <p>Solgan: {this.state.text}</p>
        <button onClick={this.handleClick} style={{ cursor: "pointer" }}>
          Change state
        </button>
      </div>
    );
  }
}
