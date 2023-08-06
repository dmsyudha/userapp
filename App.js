// ./App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import AppNavigator from './src/navigation/AppNavigator';
import apolloClient from './src/stores/apolloClient';
import { NetworkProvider } from './src/contexts/NetworkContext';
import useOfflineSync from './src/hooks/useOfflineSync';

const AppContent = () => {
  useOfflineSync();

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NetworkProvider>
        <AppContent />
      </NetworkProvider>
    </ApolloProvider>
  );
};

export default App;
