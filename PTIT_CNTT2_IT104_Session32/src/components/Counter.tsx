import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state: number) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 3</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
    </div>
  );
}
