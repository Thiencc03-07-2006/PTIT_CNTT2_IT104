import { Component } from "react";
import Table5 from "./Table5";
interface Student {
  id: string;
  name: string;
  born: Date;
  email: string;
  status: boolean;
}
interface AllStudent {
  students: Student[];
}
export default class index5 extends Component<object, AllStudent> {
  constructor(props: object) {
    super(props);
    this.state = {
      students: [
        {
          id: "SV001",
          name: "Nguyen Van A",
          born: new Date(2023, 12 - 1, 21),
          email: "nva@gmail.com",
          status: true,
        },
        {
          id: "SV002",
          name: "Nguyen Van B",
          born: new Date(2024, 3 - 1, 21),
          email: "nvb@gmail.com",
          status: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>Bai 5</h3>
        <div style={{ width: "max-content" }}>
          <div style={{ textAlign: "right" }}>
            <button style={{ width: "max-content" }}>Them moi sinh vien</button>
            <br />
            <select name="" id="" style={{ padding: "5px" }}>
              <option value="">Sap xep theo tuoi</option>
            </select>
            <input
              style={{ width: "250px" }}
              type="text"
              placeholder="Tim kiem tu khoa theo ten hoac email"
            />
          </div>
          <Table5 students={this.state.students} />
          <div
            className="list-paper"
            style={{
              display: "flex",
              justifyContent: "right",
              gap: "5px",
              marginTop: "10px",
            }}
          >
            <button>&lt;</button>
            <button>1</button>
            <button className="select">2</button>
            <button>3</button>
            <button>4</button>
            <button>&gt;</button>
          </div>
        </div>
      </div>
    );
  }
}
