import React, { useReducer } from "react";
type ActionTypes = {
  type: "Nam" | "Nu" | "Khac";
  payload: string;
};
const reducer = (state: string, action: ActionTypes) => {
  switch (action.type) {
    case "Nam": {
      return action.payload;
    }
    case "Nu": {
      return action.payload;
    }
    case "Khac": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
export default function InputRadio() {
  const [gender, dispatch] = useReducer(reducer, "Nam");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: e.target.value as ActionTypes["type"],
      payload: e.target.value,
    });
  };
  return (
    <div>
      <h3>Bai 6</h3>
      <input
        onChange={handleChange}
        type="radio"
        name="gender"
        defaultChecked
        value={"Nam"}
      />
      Nam
      <br />
      <input onChange={handleChange} type="radio" name="gender" value={"Nu"} />
      Nu
      <br />
      <input
        onChange={handleChange}
        type="radio"
        name="gender"
        value={"Khac"}
      />
      Khac
      <br />
      <p>Select gender: {gender}</p>
    </div>
  );
}
