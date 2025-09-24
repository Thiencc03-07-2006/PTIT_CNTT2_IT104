import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/index";
import { increment, decrement, reset } from "./counterSlice";
export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 1</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
