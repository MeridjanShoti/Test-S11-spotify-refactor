export const SET_SEARCH = "SET_SEARCH";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SEARCHED_RESULTS = "SET_SEARCHED_RESULTS";

export const setSearchAction = (search) => {
  return (dispatch) => {
    dispatch({ type: SET_SEARCH, payload: search });
  };
};
export const addToFavourites = (el) => {
  return (dispatch) => {
    dispatch({ type: ADD_TO_FAVOURITES, payload: el });
  };
};
export const removeFromFavourites = (el) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_FROM_FAVOURITES, payload: el });
  };
};
export const selectSong = (song) => {
  return (dispatch) => {
    dispatch({ type: SET_SELECTED_SONG, payload: song });
  };
};
export const setSearchedResultsAction = (results) => {
  return (dispatch) => {
    dispatch({ type: SET_SEARCHED_RESULTS, payload: results });
  };
};
