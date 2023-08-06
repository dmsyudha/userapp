// src/components/atoms/OfflineBanner.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNetwork } from '../../contexts/NetworkContext';

const OfflineBanner = () => {
  const isOnline = useNetwork();

  if (isOnline) return null;

  return (
    <View style={styles.banner}>
      <Text style={styles.text}>You are currently offline. Changes will be synced when you're back online.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'red',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default OfflineBanner;
