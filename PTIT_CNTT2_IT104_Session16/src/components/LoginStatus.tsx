import { Component } from "react";
interface IsLoggedIn {
  isloggedin: boolean;
}
export default class LoginStatus extends Component<object, IsLoggedIn> {
  constructor(props: object) {
    super(props);
    this.state = {
      isloggedin: false,
    };
  }
  handleClick = () => {
    this.setState({ isloggedin: !this.state.isloggedin });
  };
  render() {
    return (
      <div>
        <h3>Bai 2</h3>
        <p>
          {this.state.isloggedin
            ? "Xin chao, User!"
            : "Vui long dang nhap de tiep tuc"}
        </p>
        <button onClick={this.handleClick}>
          {this.state.isloggedin ? "Dang xuat" : "Dang nhap"}
        </button>
      </div>
    );
  }
}
