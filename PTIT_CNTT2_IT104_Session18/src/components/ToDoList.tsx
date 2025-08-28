import React, { useEffect, useReducer, useState } from "react";
interface Item {
  id: number;
  text: string;
}
type ActionTypes =
  | { type: "Init"; payload: Item[] }
  | { type: "add"; payload: string }
  | { type: "delete"; payload: number };
const reducer = (state: Item[], action: ActionTypes) => {
  switch (action.type) {
    case "Init": {
      return action.payload;
    }
    case "add": {
      return [
        ...state,
        {
          id: state.length === 0 ? 0 : state[state.length - 1].id + 1,
          text: action.payload,
        },
      ];
    }
    case "delete": {
      return state.filter((t) => t.id !== action.payload);
    }
  }
};
export default function ToDoList() {
  const [toDoList, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch({
      type: "Init",
      payload: JSON.parse(localStorage.getItem("ToDoList") || "[]"),
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("ToDoList", JSON.stringify(toDoList));
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    dispatch({ type: "add", payload: input });
  };
  const handleDelete = (id: number) => {
    if (window.confirm("Ban co chac muon xoa")) {
      dispatch({ type: "delete", payload: id });
    }
  };
  return (
    <div>
      <h3>Bai 7+8</h3>
      <div style={{ width: "300px" }}>
        <input
          style={{ width: "250px", marginRight: "20px" }}
          onChange={handleChange}
          type="text"
        />
        <button onClick={handleAdd}>Add</button>
        <div>
          {toDoList.map((t) => (
            <div
              key={t.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                padding: "10px",
              }}
            >
              <p
                style={{
                  height: "10px",
                }}
              >
                {t.text}
              </p>
              <button
                onClick={() => handleDelete(t.id)}
                style={{
                  backgroundColor: "red",
                  border: "none",
                  padding: "5px",
                  height: "max-content",
                  borderRadius: "5px",
                }}
              >
                Xoa
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
