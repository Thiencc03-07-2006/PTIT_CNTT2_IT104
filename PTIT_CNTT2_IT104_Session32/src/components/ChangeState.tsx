import { useSelector, useDispatch } from "react-redux";

export default function ChangeState() {
  const state = useSelector((state: string) => state.change);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bai 5</h3>
      <h3>{state}</h3>
      <button onClick={() => dispatch({ type: "change" })}>Change state</button>
    </div>
  );
}
