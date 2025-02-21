import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import favouritesReducer from "../reducers/favouritesReducer";
import selectSongReducer from "../reducers/selectSongReducer";

const mainReducer = combineReducers({
  search: searchReducer,
  favourites: favouritesReducer,
  selectedSong: selectSongReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
