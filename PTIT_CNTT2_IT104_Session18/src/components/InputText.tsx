import React, { useReducer } from "react";
type ActionTypes = {
  type: "input";
  payload: string;
};
const reducer = (state: string, action: ActionTypes) => {
  if (action.type === "input") {
    return action.payload;
  }
  return state;
};
export default function InputText() {
  const [input, dispatch] = useReducer(reducer, "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "input", payload: e.target.value });
  };
  return (
    <div>
      <h3>Bai 5</h3>
      <p>{input}</p>
      <input onChange={handleChange} type="text" value={input} />
    </div>
  );
}
