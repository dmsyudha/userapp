// ./App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";
import AppNavigator from "./src/navigation/AppNavigator";
import { PaperProvider } from "react-native-paper";
import apolloClient from "./src/stores/apolloClient";
import { NetworkProvider } from "./src/contexts/NetworkContext";
import useOfflineSync from "./src/hooks/useOfflineSync";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      <PaperProvider>
        <NetworkProvider>
          <AppContent />
        </NetworkProvider>
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;
