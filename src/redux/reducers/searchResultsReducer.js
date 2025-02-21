import { SET_SEARCHED_RESULTS } from "../actions";
const initialState = {
  content: null,
};
const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHED_RESULTS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default searchResultsReducer;
