import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/students/studentSlice";
export const store = configureStore({
  reducer: {
    students: reducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
