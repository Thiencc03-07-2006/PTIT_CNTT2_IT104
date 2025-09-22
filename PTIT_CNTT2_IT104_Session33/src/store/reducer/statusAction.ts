type ActionType = {
  type: string;
  payload?: number;
};
export const statusAction = (state: string = "", action: ActionType) => {
  switch (action.type) {
    case "add":
      return "add";
    case "delete":
      return "delete";
    case "edit":
      return "edit";
    case "reset":
      return "";
    default:
      return state;
  }
};
