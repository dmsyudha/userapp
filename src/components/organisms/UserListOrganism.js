import React from 'react';
import { SectionList, Text } from 'react-native';
import UserListItemMolecule from '../molecules/UserListItemMolecule';

const UserListOrganism = ({ users }) => {
  // Sort users by first name
  const sortedUsers = [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));

  const sections = sortedUsers.reduce((acc, user) => {
    const firstLetter = user.firstName[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(user);
    return acc;
  }, {});

  const sectionData = Object.keys(sections).map(key => ({
    title: key,
    data: sections[key]
  }));

  return (
    <SectionList
      sections={sectionData}
      renderItem={({ item }) => <UserListItemMolecule user={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold', paddingVertical: 5, backgroundColor: '#f0f0f0' }}>{title}</Text>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default UserListOrganism;
