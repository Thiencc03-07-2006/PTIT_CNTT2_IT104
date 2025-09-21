import { combineReducers, createStore } from "redux";
import { userReducer } from "./Reducers/userReducer";
import { listUserReducer } from "./Reducers/listUserReducer";
import { countReducer } from "./Reducers/counterReducer";
import { randomReducer } from "./Reducers/randomReducer";
import { changeReducer } from "./Reducers/changeReducer";
import { darkReducer } from "./Reducers/darkReducer";
import { authReducer } from "./Reducers/authReducer";
const rootReducer = combineReducers({
  user: userReducer,
  listUser: listUserReducer,
  count: countReducer,
  random: randomReducer,
  change: changeReducer,
  dark: darkReducer,
  auth: authReducer,
});
const store = createStore(rootReducer);
export default store;
