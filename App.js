// ./App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import AppNavigator from './src/navigation/AppNavigator';
import apolloClient from './src/stores/apolloClient';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
