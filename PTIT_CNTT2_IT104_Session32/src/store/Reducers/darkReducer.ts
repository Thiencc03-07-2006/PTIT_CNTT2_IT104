type ActionType = {
  type: string;
  payload?: number;
};
export const darkReducer = (state = "white", action: ActionType) => {
  switch (action.type) {
    case "true":
      return "black";
    case "false":
      return "white";
    default:
      return state;
  }
};
