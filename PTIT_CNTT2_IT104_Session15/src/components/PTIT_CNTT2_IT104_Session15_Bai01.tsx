import { Component } from "react";
interface Email {
  email: string;
}
export default class PTIT_CNTT2_IT104_Session15_Bai01 extends Component<
  object,
  Email
> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h3>Bai 1</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit" style={{ width: "50px" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
