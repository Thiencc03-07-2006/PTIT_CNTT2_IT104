import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface language {
  value: "vi" | "en";
}
const initialState: language = { value: "vi" };
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<"vi" | "en">) => {
      state.value = action.payload;
    },
  },
});
export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
