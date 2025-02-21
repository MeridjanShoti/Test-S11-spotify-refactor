import { SET_SELECTED_SONG } from "../actions";
const initialState = {
  content: null,
};
const selectSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SONG:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default selectSongReducer;
