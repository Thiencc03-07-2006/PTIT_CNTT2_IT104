import { useReducer } from "react";
interface User {
  name: string;
  email: string;
}
type Action = {
  type: "change";
  field: "name" | "email";
  value: string;
};
const reducer = (state: User, action: Action) => {
  switch (action.type) {
    case "change": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    default: {
      return state;
    }
  }
};
export default function UserForm() {
  const [user, dispatch] = useReducer(reducer, { name: "", email: "" });
  return (
    <div style={{ padding: "10px" }}>
      <h3>Bai 8</h3>
      <h4>User Information Form</h4>
      <p>Ten:</p>
      <input
        onChange={(e) =>
          dispatch({ type: "change", field: "name", value: e.target.value })
        }
        type="text"
      />
      <p>Email</p>
      <input
        onChange={(e) =>
          dispatch({ type: "change", field: "email", value: e.target.value })
        }
        type="text"
      />
      <div style={{ border: "2px solid gray" }}>
        <h4>Thong tin nguoi dung</h4>
        <p>Ten: {user.name === "" ? "(Chua nhap)" : user.name}</p>
        <p>Email: {user.email === "" ? "(Chua nhap)" : user.email}</p>
      </div>
    </div>
  );
}
