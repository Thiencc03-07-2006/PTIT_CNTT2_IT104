import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface list {
  value: { id: string; name: string; favorites: boolean }[];
}
const initialState: list = {
  value: [
    { id: "1", name: "Nguyen Van A", favorites: false },
    { id: "2", name: "Nguyen Van B", favorites: false },
    { id: "3", name: "Nguyen Van C", favorites: false },
    { id: "4", name: "Nguyen Van D", favorites: false },
  ],
};
const listSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeFavorites: (state, action: PayloadAction<string>) => {
      const temp = state.value;
      const index = temp.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        temp[index].favorites = !temp[index].favorites;
        state.value = temp;
      } else {
        console.log("? Sua doi that bai");
      }
    },
  },
});
export const { changeFavorites } = listSlice.actions;
export default listSlice.reducer;
