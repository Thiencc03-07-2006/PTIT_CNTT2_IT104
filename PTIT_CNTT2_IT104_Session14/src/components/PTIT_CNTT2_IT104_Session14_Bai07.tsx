import { Component } from "react";
interface Acc {
  name: string;
  email: string;
  password: string;
  phone: string;
}
export default class PTIT_CNTT2_IT104_Session14_Bai07 extends Component<
  object,
  Acc
> {
  constructor(props: object) {
    super(props);
    this.state = { name: "", email: "", password: "", phone: "" };
  }
  private AllAcc: Acc[] = [];
  componentDidMount() {
    const data = localStorage.getItem("AllAcc");
    if (data) {
      this.AllAcc = JSON.parse(data);
    }
  }
  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value.trim(),
    } as unknown as Pick<Acc, keyof Acc>);
  };
  handleSumit = (e: React.FormEvent) => {
    e.preventDefault();
    let check = 1;
    let alertText = "";
    if (this.state.name === "") {
      alertText += "Ten khong hop le\n";
      check = 0;
    }
    if (this.state.email === "") {
      alertText += "Email khong hop le\n";
      check = 0;
    }
    if (this.AllAcc.find((t) => t.email === this.state.email)) {
      alertText += "Email da duoc dang ky\n";
      check = 0;
    }
    if (this.state.password === "" || this.state.password.length < 8) {
      alertText += "Mat khau khong hop le\n";
      check = 0;
    }
    if (this.state.phone === "") {
      alertText += "So dien thoai khong hop le";
      check = 0;
    }
    if (check) {
      this.AllAcc.push(this.state);
      localStorage.setItem("AllAcc", JSON.stringify(this.AllAcc));
      this.setState({ name: "", email: "", password: "", phone: "" });
    } else {
      alert(alertText);
    }
  };
  render() {
    return (
      <div>
        <h3>Bai 7</h3>
        <form onSubmit={this.handleSumit}>
          <h4>Dang ky tai khoan</h4>
          <label>Ten sinh vien</label>
          <br />
          <input
            type="text"
            name={"name"}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            name={"email"}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Mat khau</label>
          <br />
          <input
            type="password"
            name={"password"}
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <label>So dien thoai</label>
          <br />
          <input
            type="text"
            name={"phone"}
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Dang ky</button>
        </form>
      </div>
    );
  }
}
