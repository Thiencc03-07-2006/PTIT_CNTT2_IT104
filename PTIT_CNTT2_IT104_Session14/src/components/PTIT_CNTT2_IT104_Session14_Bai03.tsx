import { Component } from "react";
interface Com {
  name: string;
}
export default class PTIT_CNTT2_IT104_Session14_Bai03 extends Component<
  object,
  Com
> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "Rikkei Academy",
    };
  }
  handleClick = () => {
    this.setState({
      name:
        this.state.name === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy",
    });
  };
  render() {
    return (
      <div>
        <h3>Bai 3</h3>
        <p>Company: {this.state.name}</p>
        <button onClick={this.handleClick} style={{ cursor: "pointer" }}>
          Change state
        </button>
      </div>
    );
  }
}
