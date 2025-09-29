import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/books/bookSlice";
export const store = configureStore({
  reducer: {
    books: reducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
