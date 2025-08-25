import { Component } from "react";
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
export default class Table5 extends Component<AllStudent> {
  constructor(props: AllStudent) {
    super(props);
  }
  render() {
    return (
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ma sinh vien</th>
            <th>Ngay sinh</th>
            <th>Email</th>
            <th>Status</th>
            <th>Chuc nang</th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map((t, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{t.id}</td>
              <td>
                {t.born.toLocaleDateString("vi-VN").replace(/\b(\d)\b/g, "0$1")}
              </td>
              <td>{t.email}</td>
              <td>
                <button
                  style={{
                    width: "max-content",
                    backgroundColor: t.status ? "#f6ffed" : "#fff1f0",
                    border: "2px solid",
                    borderColor: t.status ? "#bbec96" : "red",
                    color: t.status ? "#bbec96" : "red",
                  }}
                >
                  {t.status ? "Dang hoat dong" : "Ngung hoat dong"}
                </button>
              </td>
              <td style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    border: "2px solid purple",
                    width: "max-content",
                    backgroundColor: "#f9f0ff",
                    color: "purple",
                  }}
                >
                  Chan
                </button>
                <button
                  style={{
                    border: "2px solid orange",
                    width: "max-content",
                    backgroundColor: "#fff7e6",
                    color: "orange",
                  }}
                >
                  Sua
                </button>
                <button
                  style={{
                    border: "2px solid red",
                    width: "max-content",
                    backgroundColor: "#fff1f0",
                    color: "red",
                  }}
                >
                  Xoa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
