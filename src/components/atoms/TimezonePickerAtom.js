import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment-timezone';
import { IconButton } from "react-native-paper";

const TimezonePickerAtom = ({ selectedTimezone, onTimezoneChange }) => {
  const timezones = moment.tz.names();

  return (
    <View style={styles.container}>
      <IconButton
        icon="clock-time-ten"
        size={20}
        style={styles.iconButton}
      />
      <Picker
        selectedValue={selectedTimezone}
        onValueChange={onTimezoneChange}
        style={styles.picker}
      >
        {timezones.map((timezone) => (
          <Picker.Item key={timezone} label={timezone} value={timezone} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  iconButton: {
    marginRight: 10,
  },
  picker: {
    flex: 1,
  }
});

export default TimezonePickerAtom;
