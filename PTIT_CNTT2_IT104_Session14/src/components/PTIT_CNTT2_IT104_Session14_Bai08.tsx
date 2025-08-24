import React, { Component } from "react";
interface Acc {
  name: string;
  email: string;
  password: string;
  phone: string;
}
interface AccLess {
  email: string;
  password: string;
}
export default class PTIT_CNTT2_IT104_Session14_Bai08 extends Component<
  object,
  AccLess
> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  private AllAcc: Acc[] = [];
  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value.trim(),
    } as unknown as Pick<AccLess, keyof AccLess>);
  };
  handleSumit = (e: React.FormEvent) => {
    e.preventDefault();
    let check = 1;
    let alertText = "";
    if (this.state.email === "") {
      alertText += "Email khong hop le\n";
      check = 0;
    }
    if (this.state.password === "" || this.state.password.length < 8) {
      alertText += "Mat khau khong hop le\n";
      check = 0;
    }
    if (check) {
      const data = localStorage.getItem("AllAcc");
      if (data) {
        this.AllAcc = JSON.parse(data);
      }
      const index = this.AllAcc.findIndex((t) => t.email === this.state.email);
      if (index !== -1 && this.AllAcc[index].password === this.state.password) {
        alert("Dang nhap thanh cong");
        this.setState({ email: "", password: "" });
      } else {
        alert("Dang nhap that bai");
      }
    } else {
      alert(alertText);
    }
  };
  render() {
    return (
      <div>
        <h3>Bai 8</h3>
        <form onSubmit={this.handleSumit}>
          <h4>Dang nhap</h4>
          <label>Email</label>
          <br />
          <input
            type="email"
            name={"email"}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name={"password"}
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Dang nhap</button>
        </form>
      </div>
    );
  }
}
