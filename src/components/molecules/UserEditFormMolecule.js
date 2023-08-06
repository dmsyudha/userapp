// src\components\molecules\UserEditFormMolecule.js
import React from 'react';
import { Button } from 'react-native';
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
    <>
      <EditFieldAtom label="First Name" value={updatedUser.firstName} onChangeText={updateField('firstName')} />
      <EditFieldAtom label="Last Name" value={updatedUser.lastName} onChangeText={updateField('lastName')} />
      <EditFieldAtom label="Email" value={updatedUser.email} onChangeText={updateField('email')} />
      <BirthdayPickerAtom
        selectedDate={new Date(updatedUser.birthday)}
        onDateChange={updateField('birthday')}
      />
      <TimezonePickerAtom
        selectedTimezone={updatedUser.time_zone || ''}
        onTimezoneChange={updateField('time_zone')}
      />
      <Button title="Update" onPress={handleUpdate} disabled={!isDataChanged} />
    </>
  );
};

export default UserEditFormMolecule;
