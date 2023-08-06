// src\components\organisms\UserDetailOrganism.js
import React from 'react';
import { View } from 'react-native';
import UserDetailItemMolecule from '../molecules/UserDetailItemMolecule';

const UserDetailOrganism = ({ user }) => {
    return (
        <View style={{ padding: 10 }}>
            <UserDetailItemMolecule label="First Name" value={user.firstName} />
            <UserDetailItemMolecule label="Last Name" value={user.lastName} />
            <UserDetailItemMolecule label="Email" value={user.email} />
            <UserDetailItemMolecule label="Birthday" value={user.birthday} />
            <UserDetailItemMolecule label="Timezone" value={user.time_zone} />
        </View>
    );
};

export default UserDetailOrganism;
