// ./App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import AppNavigator from './src/navigation/AppNavigator';
import apolloClient from './src/stores/apolloClient';
import { NetworkProvider } from './src/contexts/NetworkContext'; // Import this

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NetworkProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </NetworkProvider>
    </ApolloProvider>
  );
};

export default App;
