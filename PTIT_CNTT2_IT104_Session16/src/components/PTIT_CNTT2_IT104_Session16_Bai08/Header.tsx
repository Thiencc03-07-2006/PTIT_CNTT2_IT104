import { Component } from "react";
interface HeaderProps {
  handleClickShowCart: () => void;
  length: number;
}
export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "orange",
          color: "white",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <a style={{ color: "white", textDecoration: "none" }} href="">
            Trang chu
          </a>
          <a style={{ color: "white", textDecoration: "none" }} href="">
            Danh sach san pham
          </a>
        </div>
        <div
          style={{ display: "flex" }}
          onClick={this.props.handleClickShowCart}
        >
          🛒
          <span
            style={{
              backgroundColor: "red",
              width: "20px",
              height: "20px",
              borderRadius: "100%",
              textAlign: "center",
            }}
          >
            {this.props.length}
          </span>
        </div>
      </div>
    );
  }
}
