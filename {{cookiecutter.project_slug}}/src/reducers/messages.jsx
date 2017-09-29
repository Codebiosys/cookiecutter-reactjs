import {
  DISPLAY_MESSAGE,
  CLEAR_MESSAGE,
} from "actions/constants";

const defaultState = { display: false };
export default (state = defaultState, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return { ...state, display: true, message: action.message };
    case CLEAR_MESSAGE:
      return { ...defaultState };
    default:
      return state;
  }
};
