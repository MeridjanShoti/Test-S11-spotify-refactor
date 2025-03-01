import { SET_SEARCH } from "../actions";
const initialState = {
  content: "",
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default searchReducer;
