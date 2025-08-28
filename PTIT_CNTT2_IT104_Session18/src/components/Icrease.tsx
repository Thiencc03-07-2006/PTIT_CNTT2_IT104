import { useReducer } from "react";
const reducer = (state: number) => {
  return (state += 1);
};
export default function Icrease() {
  const [count, dispatch] = useReducer(reducer, 0);
  const handleClick = () => {
    dispatch();
  };
  return (
    <div>
      <h3>Bai 1</h3>
      <p>{count}</p>
      <button onClick={handleClick}>Icrease</button>
    </div>
  );
}
