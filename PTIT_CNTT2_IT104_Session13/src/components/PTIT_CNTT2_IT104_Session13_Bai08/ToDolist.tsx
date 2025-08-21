import { Component } from "react";
import "../../style/ToDoList.css";
interface toDoListItem {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
}
export default class ToDoList extends Component<object, toDoListItem[]> {
  constructor(props: object) {
    super(props);
    this.state = [
      {
        id: 1,
        name: "Mua banh",
        assign: "An",
        status: false,
        created_at: new Date(),
      },
      {
        id: 2,
        name: "Mua sua",
        assign: "An",
        status: true,
        created_at: new Date(),
      },
    ];
  }
  formatDate(date: Date): string {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // tháng bắt đầu từ 0
    const yyyy = date.getFullYear();
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
  }
  render() {
    return (
      <div>
        <h3>Bai 8</h3>
        <table id="toDoList">
          <thead>
            <tr>
              <th>STT</th>
              <td>Ten cong viec</td>
              <th>Nguoi thuc hien</th>
              <th>Trang thai</th>
              <th>Thoi gian tao</th>
              <th>Chuc nang</th>
            </tr>
          </thead>
          <tbody>
            {this.state.map((t, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{t.name}</td>
                <td>{t.assign}</td>
                <td>
                  <button className={t.status ? "btn-green" : "btn-red"}>
                    {t.status ? "Hoat thanh" : "Chua hoat thanh"}
                  </button>
                </td>
                <td>{this.formatDate(t.created_at)}</td>
                <td>
                  <button className="btn-orange">Sua</button>
                  <span> </span>
                  <button className="btn-red">Xoa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
