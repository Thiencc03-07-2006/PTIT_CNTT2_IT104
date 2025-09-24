import { createSlice } from "@reduxjs/toolkit";
interface displayMode {
  value: boolean;
}
const initialState: displayMode = { value: false };
const displaySlice = createSlice({
  name: "displayMode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.value = !state.value;
    },
  },
});
export const { changeMode } = displaySlice.actions;
export default displaySlice.reducer;
