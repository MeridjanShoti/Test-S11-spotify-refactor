import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import favouritesReducer from "../reducers/favouritesReducer";
import selectSongReducer from "../reducers/selectSongReducer";
import searchResultsReducer from "../reducers/searchResultsReducer";

const mainReducer = combineReducers({
  search: searchReducer,
  favourites: favouritesReducer,
  selectedSong: selectSongReducer,
  searchedResults: searchResultsReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
