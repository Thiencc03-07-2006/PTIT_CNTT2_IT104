import { useSelector, useDispatch } from "react-redux";

export default function RandomNumber() {
  const random = useSelector((state: number[]) => state.random);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 4</h3>
      <h3>[{random.join(", ")}]</h3>
      <button onClick={() => dispatch({ type: "new" })}>
        Generate Random Number
      </button>
    </div>
  );
}
