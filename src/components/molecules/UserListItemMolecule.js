import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserListItemMolecule = ({ user }) => {
  const navigation = useNavigation();
  
  const onUserPress = React.useCallback(() => {
    navigation.navigate('UserDetail', { id: user.id });
  }, [navigation, user.id]);
  
  const initials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <TouchableOpacity onPress={onUserPress} style={styles.container}>
      <View style={styles.initialsContainer}>
        <Text style={styles.initials}>{initials}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc'
  },
  initialsContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  initials: {
    color: '#fff',
    fontWeight: 'bold'
  },
  nameContainer: {
    flex: 1
  },
  name: {
    fontSize: 16
  }
});

export default React.memo(UserListItemMolecule);
