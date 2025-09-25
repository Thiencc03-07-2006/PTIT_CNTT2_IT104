import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: {
    todo: reducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
