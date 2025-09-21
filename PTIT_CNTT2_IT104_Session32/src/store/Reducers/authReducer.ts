type User = {
  email: string;
  password: string;
};
type ActionType = {
  type: string;
  payload?: User;
};
const initialState = {
  registered: { email: "", password: "" },
  user: { email: "", password: "" },
};
export const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, registered: action.payload };
    case "LOGIN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
