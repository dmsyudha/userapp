// src\components\templates\UserListTemplate.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserListOrganism from '../organisms/UserListOrganism';

const UserListTemplate = ({ users }) => {
  return (
    <View style={styles.container}>
      <UserListOrganism users={users} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default UserListTemplate;
