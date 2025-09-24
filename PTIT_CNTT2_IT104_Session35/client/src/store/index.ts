import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import randomReducer from "../features/random/randomSlice";
import darkModeReducer from "../features/darkMode/darkModeSlice";
import displayModeReducer from "../features/displayMode/displayModeSlice";
import menuModeReducer from "../features/menu/menuSlice";
import languageReducer from "../features/language/languageSlice";
import listReducer from "../features/listFavorites/listSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    random: randomReducer,
    darkMode: darkModeReducer,
    displayMode: displayModeReducer,
    menuMode: menuModeReducer,
    language: languageReducer,
    list: listReducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
