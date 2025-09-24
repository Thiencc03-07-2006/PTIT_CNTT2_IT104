import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { HeartOutlined } from "@ant-design/icons";
import { changeFavorites } from "./listSlice";

export default function ListFavorites() {
  const list = useSelector((state: RootState) => state.list.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 7</h3>
      <h4>
        <strong>List Favorites User</strong>
      </h4>
      {list.map((t) => (
        <div key={t.id}>
          <p>UserName: {t.name}</p>
          <p>
            Favorites:{" "}
            <span
              onClick={() => dispatch(changeFavorites(t.id))}
              style={{ color: t.favorites ? "red" : "black" }}
            >
              <HeartOutlined />
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
