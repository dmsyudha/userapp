import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo. If not, you can use another package for icons.

const UserDetailItemMolecule = ({ icon, label, value }) => {
    return (
        <View style={styles.container}>
            <MaterialIcons name={icon} size={20} color="grey" style={styles.icon} />
            <View style={styles.detailContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    icon: {
        marginRight: 10
    },
    detailContainer: {
        flex: 1
    },
    label: {
        fontSize: 14,
        color: 'grey'
    },
    value: {
        fontSize: 16
    }
});

export default UserDetailItemMolecule;
