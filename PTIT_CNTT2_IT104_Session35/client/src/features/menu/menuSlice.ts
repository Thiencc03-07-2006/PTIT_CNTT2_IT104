import { createSlice } from "@reduxjs/toolkit";
interface menuMode {
  value: boolean;
}
const initialState: menuMode = { value: true };
const menuSlice = createSlice({
  name: "menuMode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.value = !state.value;
    },
  },
});
export const { changeMode } = menuSlice.actions;
export default menuSlice.reducer;
