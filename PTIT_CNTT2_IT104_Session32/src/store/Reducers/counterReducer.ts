type ActionType = {
  type: string;
  payload?: number;
};
export const countReducer = (state = 0, action: ActionType) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};
