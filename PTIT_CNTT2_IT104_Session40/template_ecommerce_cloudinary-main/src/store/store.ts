import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import categotyReducer from "../features/categorySlice";
const store = configureStore({
  reducer: { product: productReducer, category: categotyReducer },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
