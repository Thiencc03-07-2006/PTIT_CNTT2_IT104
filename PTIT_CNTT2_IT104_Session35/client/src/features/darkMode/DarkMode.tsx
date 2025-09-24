import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/index";
import { changeMode } from "./darkModeSlice";
export default function DarkMode() {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 3</h3>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        <button
          onClick={() => dispatch(changeMode())}
          style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
          }}
        >
          {darkMode ? "dark" : "white"}
        </button>
      </div>
    </div>
  );
}
