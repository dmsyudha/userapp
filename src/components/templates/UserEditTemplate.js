import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserEditOrganism from '../organisms/UserEditOrganism';

const UserEditTemplate = ({ user, onUpdate }) => {
  return (
    <View style={styles.container}>
      <UserEditOrganism user={user} onUpdate={onUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,  // Padding to the left
    paddingRight: 20, // Padding to the right
    flex: 1,         // Make sure it takes up the entire screen
  },
});

export default UserEditTemplate;
