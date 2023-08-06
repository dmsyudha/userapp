import { ApolloClient, InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cache = new InMemoryCache();

// Persist cache
persistCache({
  cache,
  storage: AsyncStorage,
});

const apolloClient = new ApolloClient({
  uri: 'http://10.0.2.2:3000/graphql',
  cache,
});

export default apolloClient;
