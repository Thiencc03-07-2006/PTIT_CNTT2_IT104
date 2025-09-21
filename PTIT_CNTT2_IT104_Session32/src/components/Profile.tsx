import { useSelector, useDispatch } from "react-redux";
export default function Profile() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  dispatch({ type: "get" });
  return (
    <div>
      <h3>Bai 1</h3>
      <p>Id: {user.id}</p>
      <p>Ho va ten: {user.userName}</p>
      <p>Gioi tinh: {user.gender}</p>
      <p>Ngay sinh: {user.dateBirth}</p>
      <p>Dia chi: {user.address}</p>
    </div>
  );
}
