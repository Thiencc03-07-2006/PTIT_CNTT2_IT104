const initialState = "Rikkei Academy";
type ActionType = {
  type: string;
  payload?: number;
};
export const changeReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "change":
      return "RikkeiSoft";
    default:
      return state;
  }
};
