// src\components\molecules\UserDetailItemMolecule.js
import React from 'react';
import { View } from 'react-native';
import LabelAtom from '../atoms/LabelAtom';
import ValueAtom from '../atoms/ValueAtom';

const UserDetailItemMolecule = ({ label, value }) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <LabelAtom label={label} />
            <ValueAtom value={value} />
        </View>
    );
};

export default UserDetailItemMolecule;
