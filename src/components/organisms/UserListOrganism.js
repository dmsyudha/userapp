// src\components\organisms\UserListOrganism.js
import React from 'react';
import { FlatList } from 'react-native';
import UserListItemMolecule from '../molecules/UserListItemMolecule';

const UserListOrganism = ({ users }) => {
  const renderItem = React.useCallback(({ item }) => {
    return <UserListItemMolecule user={item} />;
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      getItemLayout={(data, index) => (
        { length: 80, offset: 80 * index, index }  // assuming each item is 80 units tall
      )}
      initialNumToRender={10}  // render 10 items initially
    />
  );
};

export default UserListOrganism;
