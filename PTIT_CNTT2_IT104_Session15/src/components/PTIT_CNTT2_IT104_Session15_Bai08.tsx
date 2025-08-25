import { Component } from "react";
interface Count {
  count: number;
}
export default class PTIT_CNTT2_IT104_Session15_Bai08 extends Component<
  object,
  Count
> {
  constructor(props: object) {
    super(props);
    this.state = { count: 0 };
  }
  private toDelete?: number;
  componentDidMount(): void {
    this.toDelete = window.setInterval(
      () =>
        this.setState({
          count: this.state.count + 1 === 10 ? 0 : this.state.count + 1,
        }),
      1000
    );
  }
  componentWillUnmount(): void {
    clearInterval(this.toDelete);
  }
  render() {
    return (
      <div>
        <h3>Bai 8</h3>
        <p>count: {this.state.count}</p>
      </div>
    );
  }
}
