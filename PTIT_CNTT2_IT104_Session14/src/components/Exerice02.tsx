import { Component } from "react";
interface Me {
  name: string;
}
export default class Exerice02 extends Component<object, Me> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "Cao Chi Thien",
    };
  }
  handleClick = () => {
    this.setState({
      name: this.state.name === "Cao Chi Thien" ? "An Binh" : "Cao Chi Thien",
    });
  };
  handleDoubleClick = () => {
    this.setState({ name: this.state.name });
  };
  componentDidMount(): void {
    console.log("Component da duoc Mount");
  }
  shouldComponentUpdate(nextProps: Readonly<object>, nextState: Readonly<Me>) {
    if (nextState.name !== this.state.name) {
      return true;
    } else {
      console.log("Name giong name truoc do");
      return false;
    }
  }
  componentDidUpdate(prevProps: Readonly<object>, prevState: Readonly<Me>) {
    if (prevState.name !== this.state.name) {
      console.log("Name da thay doi");
    }
  }
  componentWillUnmount(): void {
    console.log("ComponentWillUnmount");
  }
  render() {
    return (
      <div onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
        <h3>Bai 2</h3>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
}
