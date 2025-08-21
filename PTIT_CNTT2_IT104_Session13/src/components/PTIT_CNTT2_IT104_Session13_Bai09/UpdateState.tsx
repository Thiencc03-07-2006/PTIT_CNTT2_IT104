import { Component } from "react";
interface com {
  name: string;
}
export default class UpdateState extends Component<object, com> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "Rikkei Academy",
    };
  }
  handleClick = () => {
    this.setState({
      name:
        this.state.name === "Rikkei Academy" ? "Rikkei Soft" : "Rikkei Academy",
    });
  };
  render() {
    return (
      <div>
        <h3>Bai 9</h3>
        <p>Ten cong ty: {this.state.name}</p>
        <button onClick={this.handleClick} style={{ cursor: "pointer" }}>
          Change
        </button>
      </div>
    );
  }
}
