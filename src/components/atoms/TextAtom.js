// src\components\atoms\TextAtom.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextAtom = ({ text, style }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default TextAtom;
