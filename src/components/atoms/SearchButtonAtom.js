// src\components\atoms\SearchButtonAtom.js
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchButtonAtom = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="search" size={20} color="#fff" />
      <Text style={styles.text}>Search</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
    margin: 5,
  },
  text: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 16,
  },
});

export default SearchButtonAtom;
