import { Component } from "react";
interface User {
  name: string;
  email: string;
  age: number;
}
export default class UserForm extends Component<object, User> {
  state: User = { name: "", email: "", age: 0 };
  private submited: boolean = false;
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]:
        e.target.name === "age" ? Number(e.target.value) : e.target.value,
    });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.submited = true;
    this.forceUpdate();
  };
  handleClearInput = () => {
    this.submited = false;
    this.setState({ name: "", email: "", age: 0 });
  };
  render() {
    const { name, email, age } = this.state;
    return (
      <div>
        <h3>Bai 5</h3>
        <form onSubmit={this.handleSubmit} style={{ width: "max-content" }}>
          <h4>Nhap thong tin nguoi dung</h4>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            placeholder="Ho ten"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="number"
            name="age"
            value={age <= 0 ? "" : age}
            placeholder="Tuoi"
          />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit">Gui</button>
            <button onClick={this.handleClearInput}>Xoa tat ca</button>
          </div>
          <div>
            <p style={{ display: !name && this.submited ? "block" : "none" }}>
              Ten khong duoc de trong
            </p>
            <p style={{ display: !email && this.submited ? "block" : "none" }}>
              Email khong hop le
            </p>
            <p
              style={{ display: age <= 0 && this.submited ? "block" : "none" }}
            >
              Tuoi khong hop le
            </p>
            <div
              style={{
                display:
                  this.submited && name && email && age > 0 ? "block" : "none",
              }}
            >
              <p>Thong tin da nhap:</p>
              <p>Ho va ten: {name}</p>
              <p>Email: {email}</p>
              <p>Tuoi: {age}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
