import { Component } from "react";
interface Percent {
  percent: number;
}
export default class PTIT_CNTT2_IT104_Session15_Bai04 extends Component<
  object,
  Percent
> {
  constructor(props: object) {
    super(props);
    this.state = {
      percent: 0,
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ percent: Number(e.target.value) });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.forceUpdate();
  };
  shouldComponentUpdate(): boolean {
    return false;
  }
  render() {
    return (
      <div>
        <h3>Bai 4</h3>
        <form onSubmit={this.handleSubmit}>
          <p>Tien do hoan thanh: {this.state.percent}%</p>
          <input
            type="range"
            style={{ padding: 0, width: "100%" }}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
