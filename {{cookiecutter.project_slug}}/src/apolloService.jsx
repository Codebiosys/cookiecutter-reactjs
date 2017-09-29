import {
  ApolloClient,
  createNetworkInterface,
} from "react-apollo";

const GRAPHQL_HOST = process.env.GRAPHQL_HOST || window.location.hostname;
const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 4000;
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT|| "/graphql";

// GRAPHQL_HOST & GRAPHQL_PORT are defined in webpack
const networkInterface = createNetworkInterface({
  uri: `${GRAPHQL_HOST}:${GRAPHQL_PORT}${GRAPHQL_ENDPOINT}`
});

export default new ApolloClient({
  networkInterface,
  queryDeduplication: true,
});
