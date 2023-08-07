// src\components\templates\UserDetailTemplate.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserDetailOrganism from '../organisms/UserDetailOrganism';

const UserDetailTemplate = ({ user }) => {
    return (
        <View style={styles.container}>
            <UserDetailOrganism user={user} />
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

export default UserDetailTemplate;
