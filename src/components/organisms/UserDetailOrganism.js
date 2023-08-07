import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserDetailItemMolecule from '../molecules/UserDetailItemMolecule';
import { MaterialIcons } from '@expo/vector-icons';

const UserDetailOrganism = ({ user }) => {
    const navigation = useNavigation();
    const initials = `${user.firstName[0]}${user.lastName[0]}`;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.initialsContainer}>
                    <Text style={styles.initials}>{initials}</Text>
                </View>
                <Text style={styles.fullName}>{`${user.firstName} ${user.lastName}`}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('UserEdit', { id: user.id })} style={styles.editButton}>
                    <MaterialIcons name="edit" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <UserDetailItemMolecule icon="mail-outline" label="Email" value={user.email} />
            <UserDetailItemMolecule icon="calendar-today" label="Birthday" value={user.birthday} />
            <UserDetailItemMolecule icon="access-time" label="Timezone" value={user.time_zone} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    initialsContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    initials: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    fullName: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1
    },
    editButton: {
        padding: 5
    }
});

export default UserDetailOrganism;
