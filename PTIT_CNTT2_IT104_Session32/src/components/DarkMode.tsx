import { useSelector, useDispatch } from "react-redux";

export default function DarkMode() {
  const state = useSelector((state: any) => state.dark);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 6</h3>
      <div style={{ background: state, height: "100px", width: "100px" }}>
        <input
          type="checkbox"
          onChange={(e) => dispatch({ type: String(e.target.checked) })}
        />
        <span style={{ color: state === "black" ? "white" : "black" }}>
          {state === "black" ? "Toi" : "Sang"}
        </span>
      </div>
    </div>
  );
}
