import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searcReducer from "../reducers/searchReducer";
const mainReducer = combineReducers({
  search: searcReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
