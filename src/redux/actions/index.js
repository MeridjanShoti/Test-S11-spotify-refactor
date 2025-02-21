export const SET_SEARCH = "SET_SEARCH";

export const setSearchAction = (search) => {
  return (dispatch) => {
    dispatch({ type: SET_SEARCH, payload: search });
  };
};
