import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/index";
import { newNumber } from "./randomSlice";

export default function Random() {
  const random = useSelector((state: RootState) => state.random.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 2</h3>
      <h4>Lis number: [{random.join(", ")}]</h4>
      <button onClick={() => dispatch(newNumber())}>Random number</button>
    </div>
  );
}
