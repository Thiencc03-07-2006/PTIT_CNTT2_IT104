import React, { Component } from "react";
interface Sex {
  sex: "male" | "female" | "other";
}
export default class PTIT_CNTT2_IT104_Session14_Bai06 extends Component<
  object,
  Sex
> {
  constructor(props: object) {
    super(props);
    this.state = {
      sex: "male",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ sex: e.target.value as Sex["sex"] });
  };
  handleSumit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state.sex);
  };
  render() {
    return (
      <div>
        <h3>Bai 6</h3>
        <form onSubmit={this.handleSumit}>
          <label>Gioi tinh:</label>
          <br />
          <input
            type="radio"
            name="sex"
            checked={this.state.sex === "male"}
            value={"male"}
            onChange={this.handleChange}
          />
          Nam
          <br />
          <input
            type="radio"
            name="sex"
            checked={this.state.sex === "female"}
            value={"female"}
            onChange={this.handleChange}
          />
          Nu
          <br />
          <input
            type="radio"
            name="sex"
            checked={this.state.sex === "other"}
            value={"other"}
            onChange={this.handleChange}
          />
          Khac
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
