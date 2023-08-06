import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const EditFieldAtom = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input} 
        value={value} 
        onChangeText={onChangeText} 
        placeholder={`Enter your ${label.toLowerCase()}`} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,  // gives some space between input fields
  },
  label: {
    fontSize: 18,
    marginBottom: 8,   // spacing between the label and the input field
    color: '#333',     // a subtle dark gray color
    fontWeight: 'bold'
  },
  input: {
    fontSize: 16,
    padding: 10,       // padding for the text inside the input
    borderWidth: 1,    // setting up border for the input
    borderRadius: 5,   // slightly rounded corners
    borderColor: '#ddd', // light gray border color
    backgroundColor: '#f9f9f9'  // a very light gray background to distinguish the input field
  }
});

export default EditFieldAtom;
