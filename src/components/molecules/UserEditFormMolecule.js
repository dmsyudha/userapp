import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import EditFieldAtom from "../atoms/EditFieldAtom";
import TimezonePickerAtom from "../atoms/TimezonePickerAtom";
import BirthdayPickerAtom from "../atoms/BirthdayPickerAtom";

const UserEditFormMolecule = ({ user, onUpdate }) => {
  const [updatedUser, setUpdatedUser] = React.useState(user);
  const [isDataChanged, setDataChanged] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleUpdate = () => {
    onUpdate(updatedUser);
  };

  const updateField = (field) => (value) => {
    if (field === "email") {
      setEmailValid(validateEmail(value));
    }
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
      <EditFieldAtom
        icon="account"
        label="First Name"
        value={updatedUser.firstName}
        onChangeText={updateField("firstName")}
      />
      <EditFieldAtom
        icon="account"
        label="Last Name"
        value={updatedUser.lastName}
        onChangeText={updateField("lastName")}
      />
      <EditFieldAtom
        icon="email"
        label="Email"
        value={updatedUser.email}
        onChangeText={updateField("email")}
        error={!emailValid}
        errorMessage="Invalid email format"
      />
      <TimezonePickerAtom
        selectedTimezone={updatedUser.time_zone || ""}
        onTimezoneChange={updateField("time_zone")}
      />
      <BirthdayPickerAtom
        selectedDate={new Date(updatedUser.birthday)}
        onDateChange={updateField("birthday")}
      />
      <Button
        mode="contained"
        onPress={handleUpdate}
        disabled={!isDataChanged || !emailValid}
      >
        Update
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default UserEditFormMolecule;
