import { Component } from "react";
interface List {
  list: string[];
}
export default class SubjectList extends Component<object, List> {
  constructor(props: object) {
    super(props);
    this.state = {
      list: ["Toan", "Van", "Anh", "Hoa", "Sinh"],
    };
  }
  render() {
    return (
      <div>
        <h3>Bai 1</h3>
        <div
          style={{
            backgroundColor: "black",
            width: "500px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h4 style={{ color: "white", textAlign: "center" }}>
            Danh sach mon hoc
          </h4>
          {this.state.list.map((t, i) => (
            <button
              style={{
                width: "100%",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "#e0f7fa",
                color: "blue",
              }}
              key={i}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
