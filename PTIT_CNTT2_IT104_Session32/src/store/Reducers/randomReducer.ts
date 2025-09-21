const initialState: number[] = [];
type ActionType = {
  type: string;
  payload?: number;
};
export const randomReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "new":
      return [...state, Math.floor(Math.random() * 100)];
    default:
      return state;
  }
};
