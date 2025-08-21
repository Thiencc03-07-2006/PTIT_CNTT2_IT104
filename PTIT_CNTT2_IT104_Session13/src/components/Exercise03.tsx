import { Component } from "react";
import "../style/Exercise03.css";
interface User {
  id: number;
  name: string;
  age: number;
}
export default class Exercise03 extends Component<object, User[]> {
  constructor(props: object) {
    super(props);
    this.state = [
      { id: 1, name: "John", age: 30 },
      { id: 2, name: "Mary", age: 25 },
      { id: 3, name: "Jane", age: 20 },
    ];
  }
  render() {
    return (
      <div>
        <h3>Bai 3</h3>
        <table
          id="Exercise03"
          border={1}
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </thead>
          <tbody>
            {this.state.map((t, i) => (
              <tr key={i}>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
