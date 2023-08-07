import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';

const EditFieldAtom = ({ icon, label, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <IconButton icon={icon} size={20} style={styles.icon} />
      <TextInput 
        label={label}
        value={value} 
        onChangeText={onChangeText} 
        style={styles.input}
        mode="outlined"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  }
});

export default EditFieldAtom;
