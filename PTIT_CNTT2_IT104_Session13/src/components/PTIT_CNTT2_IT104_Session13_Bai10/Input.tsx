import { Component } from "react";
interface textInput {
  text: string;
}
export default class Input extends Component<object, textInput> {
  constructor(props: object) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <h3>Bai 10</h3>
        <p>Du lieu: {this.state.text}</p>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}
