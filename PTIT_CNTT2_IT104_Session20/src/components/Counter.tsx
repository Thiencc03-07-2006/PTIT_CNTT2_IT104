import { useReducer } from "react";
type Action = {
  type: "up" | "down";
};
const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "up": {
      return state + 1;
    }
    case "down": {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};
export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h3>Bai 7</h3>
      <p>So dem: {count}</p>
      <button onClick={() => dispatch({ type: "up" })}>Tang</button>
      <button onClick={() => dispatch({ type: "down" })}>Giam</button>
    </div>
  );
}
