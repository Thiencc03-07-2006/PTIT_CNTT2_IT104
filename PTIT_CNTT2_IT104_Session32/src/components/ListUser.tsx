import { useSelector, useDispatch } from "react-redux";

export default function ListUser() {
  const user = useSelector((state: any) => state.listUser);
  const dispatch = useDispatch();
  dispatch({ type: "get" });
  return (
    <div>
      <h3>Bai 2</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ten</th>
            <th>Gioi tinh</th>
            <th>Dia chi</th>
            <th colSpan="2">Chu nang</th>
          </tr>
        </thead>
        <tbody>
          {user.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.userName}</td>
              <td>{t.gender}</td>
              <td>{t.address}</td>
              <td>
                <button>Sua</button>
              </td>
              <td>
                <button>Xoa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
