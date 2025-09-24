import { createSlice } from "@reduxjs/toolkit";
interface RandomState {
  value: number[];
}
const initialState: RandomState = { value: [] };
const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    newNumber: (state) => {
      state.value.push(Math.floor(Math.random() * 10));
    },
  },
});
export const { newNumber } = randomSlice.actions;
export default randomSlice.reducer;
