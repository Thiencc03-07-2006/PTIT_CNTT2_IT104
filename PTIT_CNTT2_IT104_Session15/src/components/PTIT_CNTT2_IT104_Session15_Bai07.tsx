import { Component } from "react";
interface DateNow {
  date: Date;
}
export default class PTIT_CNTT2_IT104_Session15_Bai07 extends Component<
  object,
  DateNow
> {
  private toDelete?: number;
  constructor(props: object) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount(): void {
    this.toDelete = window.setInterval(
      () => this.setState({ date: new Date() }),
      1
    );
  }
  componentWillUnmount(): void {
    clearInterval(this.toDelete);
  }
  render() {
    return (
      <div>
        <h3>Bai 7</h3>
        <p>
          Thoi gian hien tai: {this.state.date.getHours()} :{" "}
          {this.state.date.getMinutes()} : {this.state.date.getSeconds()}
        </p>
      </div>
    );
  }
}
