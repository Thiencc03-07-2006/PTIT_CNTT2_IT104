import { createSlice } from "@reduxjs/toolkit";
interface darkMode {
  value: boolean;
}
const initialState: darkMode = { value: false };
const darkSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.value = !state.value;
    },
  },
});
export const { changeMode } = darkSlice.actions;
export default darkSlice.reducer;
