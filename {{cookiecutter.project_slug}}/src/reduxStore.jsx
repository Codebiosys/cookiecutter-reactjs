import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";

import reducer from "reducers";

export default ({ apollo, history }) => createStore(
  combineReducers({
    app: reducer,
    apollo: apollo.reducer(),
    router: routerReducer,
  }),
  {}, // initial state
  compose(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(apollo.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined") ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f), // eslint-disable-line
);
