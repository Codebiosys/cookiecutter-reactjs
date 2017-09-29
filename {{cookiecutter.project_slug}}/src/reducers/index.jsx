import { combineReducers } from "redux";
import messages from "reducers/messages";

const app = combineReducers({
  messages,
});

export default app;
