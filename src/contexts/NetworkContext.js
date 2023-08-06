// src/contexts/NetworkContext.js

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import NetInfo from '@react-native-community/netinfo';

const NetworkContext = createContext({
  isOnline: undefined,
  addNetworkStatusListener: undefined
});

export const useNetwork = () => {
  return useContext(NetworkContext);
};

export const NetworkProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);
  const listenersRef = useRef([]);

  const addNetworkStatusListener = (listener) => {
    listenersRef.current.push(listener);
    return () => { // Provide a cleanup function to remove the listener
      listenersRef.current = listenersRef.current.filter(l => l !== listener);
    };
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
      listenersRef.current.forEach(listener => listener(state.isConnected));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NetworkContext.Provider value={{ isOnline, addNetworkStatusListener }}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;
