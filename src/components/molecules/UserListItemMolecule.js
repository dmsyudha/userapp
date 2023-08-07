// src\components\molecules\UserListItemMolecule.js
import React from "react";
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CardAtom from "../atoms/CardAtom";
import TextAtom from "../atoms/TextAtom";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const UserListItemMolecule = ({ user }) => {
  const navigation = useNavigation();
  
  const onUserPress = React.useCallback(() => {
    navigation.navigate('UserDetail', { id: user.id });
  }, [navigation, user.id]);
  
  const onEditPress = React.useCallback(() => {
    navigation.navigate('UserEdit', { id: user.id });
  }, [navigation, user.id]);
  
  return (
    <TouchableOpacity onPress={onUserPress}>
      <CardAtom>
        <View style={styles.container}>
          <View>
            <TextAtom text={`First Name: ${user.firstName}`} />
            <TextAtom text={`Last Name: ${user.lastName}`} />
          </View>
          <TouchableOpacity onPress={onEditPress}>
            <Icon name="pencil" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </CardAtom>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default React.memo(UserListItemMolecule);
