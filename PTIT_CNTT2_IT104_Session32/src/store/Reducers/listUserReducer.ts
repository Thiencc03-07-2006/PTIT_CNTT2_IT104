const initialState = [
  {
    id: 1,
    userName: "Nguyen Van Nam",
    gender: "Nam",
    dateBirth: "20/03/2023",
    address: "Thanh xuan",
  },
  {
    id: 2,
    userName: "Nguyen Van Binh",
    gender: "Nu",
    dateBirth: "20/03/2020",
    address: "Thanh xuan",
  },
];
type ActionType = {
  type: string;
  payload?: number;
};
export const listUserReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "get":
      return state;
    default:
      return state;
  }
};
