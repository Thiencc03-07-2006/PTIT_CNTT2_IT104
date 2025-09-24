import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { changeMode } from "./displayModeSlice";

export default function Display() {
  const displayMode = useSelector(
    (state: RootState) => state.displayMode.value
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 4</h3>
      <button onClick={() => dispatch(changeMode())}>
        {displayMode ? "Grid mode" : "List mode"}
      </button>
      <div
        style={{
          display: displayMode ? "grid" : "block",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
        }}
      >
        <div
          style={{
            margin: "10px",
            backgroundColor: "red",
            width: "100%",
            height: "100px",
          }}
        >
          1
        </div>
        <div
          style={{
            margin: "10px",
            backgroundColor: "red",
            width: "100%",
            height: "100px",
          }}
        >
          2
        </div>
        <div
          style={{
            margin: "10px",
            backgroundColor: "red",
            width: "100%",
            height: "100px",
          }}
        >
          3
        </div>
        <div
          style={{
            margin: "10px",
            backgroundColor: "red",
            width: "100%",
            height: "100px",
          }}
        >
          4
        </div>
      </div>
    </div>
  );
}
