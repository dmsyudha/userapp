import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import EditFieldAtom from '../atoms/EditFieldAtom';
import TimezonePickerAtom from '../atoms/TimezonePickerAtom';
import BirthdayPickerAtom from '../atoms/BirthdayPickerAtom';

const UserEditFormMolecule = ({ user, onUpdate }) => {
  const [updatedUser, setUpdatedUser] = React.useState(user);
  const [isDataChanged, setDataChanged] = React.useState(false);

  const handleUpdate = () => {
    onUpdate(updatedUser);
  };

  const updateField = (field) => (value) => {
    if (user[field] !== value) {
      setDataChanged(true);
    }
    setUpdatedUser({
      ...updatedUser,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <EditFieldAtom icon="account" label="First Name" value={updatedUser.firstName} onChangeText={updateField('firstName')} />
      <EditFieldAtom icon="account" label="Last Name" value={updatedUser.lastName} onChangeText={updateField('lastName')} />
      <EditFieldAtom icon="email" label="Email" value={updatedUser.email} onChangeText={updateField('email')} />
      <TimezonePickerAtom selectedTimezone={updatedUser.time_zone || ''} onTimezoneChange={updateField('time_zone')} />
      <BirthdayPickerAtom selectedDate={new Date(updatedUser.birthday)} onDateChange={updateField('birthday')} />
      <Button mode="contained" onPress={handleUpdate} disabled={!isDataChanged}>
        Update
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

export default UserEditFormMolecule;
