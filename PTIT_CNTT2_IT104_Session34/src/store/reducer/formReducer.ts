type ActionType = {
  type: string;
  payload?: unknown;
};
export const status = (state = "add", action: ActionType) => {
  switch (action.type) {
    case "add":
    case "update":
    case "info":
      return action.type;
    default:
      return state;
  }
};
