import { Component } from "react";

export default class Header extends Component {
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
        <div style={{ display: "flex" }}>
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
            3
          </span>
        </div>
      </div>
    );
  }
}
