import React from 'react';
import { Text } from 'react-native';

const LabelAtom = ({ label }) => {
    return <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{label}</Text>;
};

export default LabelAtom;
