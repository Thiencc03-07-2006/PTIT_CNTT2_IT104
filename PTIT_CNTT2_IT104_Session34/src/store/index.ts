import { createStore, combineReducers } from "redux";
import { students } from "./reducer/studentReducer";
import { status } from "./reducer/formReducer";
const rootReducer = combineReducers({
  students: students,
  form: status,
});
const store = createStore(rootReducer);
export default store;
