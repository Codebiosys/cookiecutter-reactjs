import {
  DISPLAY_MESSAGE,
  CLEAR_MESSAGE,
} from "actions/constants";

export const displayMessage = message => ({
  type: DISPLAY_MESSAGE,
  message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
