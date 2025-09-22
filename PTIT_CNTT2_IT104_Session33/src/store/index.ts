import { createStore, combineReducers } from "redux";
import { statusAction } from "./reducer/statusAction";
import { product } from "./reducer/productReducer";
import { cart } from "./reducer/cartReducer";
const rootReducer = combineReducers({
  status: statusAction,
  products: product,
  carts: cart,
});
const store = createStore(rootReducer);
export default store;
