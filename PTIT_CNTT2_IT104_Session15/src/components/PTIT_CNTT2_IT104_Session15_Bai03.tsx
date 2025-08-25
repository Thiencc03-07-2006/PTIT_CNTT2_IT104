import { Component } from "react";
interface DateSave {
  date: string;
}
export default class PTIT_CNTT2_IT104_Session15_Bai03 extends Component<
  object,
  DateSave
> {
  constructor(props: object) {
    super(props);
    this.state = { date: "" };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      date: e.target.value,
    });
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
        <h3>Bai 3</h3>
        <form onSubmit={this.handleSubmit}>
          <h4>Ngay sinh: {this.state.date !== "" ? this.state.date : ""}</h4>
          <input type="date" onChange={this.handleChange} />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
