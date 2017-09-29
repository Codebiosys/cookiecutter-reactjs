import React from "react";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { ApolloProvider } from "react-apollo";
import createHistory from "history/createBrowserHistory";

import apollo from "apolloService";
import storeFactory from "reduxStore";

import AppCanvas from "components/AppCanvas";
import Hello from "containers/Hello";
import Messenger from "containers/Messenger";

const history = createHistory();

const store = storeFactory({ apollo, history });

const App = () => (
  <ApolloProvider client={apollo} store={store}>
    <AppCanvas messenger={<Messenger />}>
      <ConnectedRouter history={history}>
        <div>
          <Route path="/" component={Hello} />
        </div>
      </ConnectedRouter>
    </AppCanvas>
  </ApolloProvider>
);

export default App;
