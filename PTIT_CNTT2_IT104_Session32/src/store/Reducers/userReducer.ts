const initialState = {
  id: 1,
  userName: "Nguyen Van Nam",
  gender: "Nam",
  dateBirth: "20/03/2023",
  address: "Thanh xuan",
};
type ActionType = {
  type: string;
  payload?: number;
};
export const userReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "get":
      return state;
    default:
      return state;
  }
};
