import { Component } from "react";
interface Color {
  color: string;
}
export default class PTIT_CNTT2_IT104_Session15_Bai02 extends Component<
  object,
  Color
> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: e.target.value });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h3>Bai 2</h3>
        <form onSubmit={this.handleSubmit}>
          <label></label>
          <input type="text" onChange={this.handleChange} />
          <h4>Color: {this.state.color}</h4>
          <h5>Form</h5>
          <p>Mau sac</p>
          <div
            style={{
              border: "5px solid gray",
              width: "50px",
              height: "25px",
              backgroundColor: this.state.color,
            }}
          ></div>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}
