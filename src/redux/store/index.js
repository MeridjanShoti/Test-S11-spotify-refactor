import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import favouritesReducer from "../reducers/favouritesReducer";

const mainReducer = combineReducers({
  search: searchReducer,
  favourites: favouritesReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
