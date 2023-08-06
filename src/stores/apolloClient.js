// ./src/stores/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://10.0.2.2:3000/graphql', // Replace this with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default apolloClient;
