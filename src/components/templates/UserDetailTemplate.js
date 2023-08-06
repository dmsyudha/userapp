// src\components\templates\UserDetailTemplate.js
import React from 'react';
import { View } from 'react-native';
import UserDetailOrganism from '../organisms/UserDetailOrganism';

const UserDetailTemplate = ({ user }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <UserDetailOrganism user={user} />
        </View>
    );
};

export default UserDetailTemplate;
