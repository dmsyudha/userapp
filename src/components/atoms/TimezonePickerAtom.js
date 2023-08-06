// components/atoms/TimezonePickerAtom.js
import React from 'react';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment-timezone';

const TimezonePickerAtom = ({ selectedTimezone, onTimezoneChange }) => {
  const timezones = moment.tz.names();

  return (
    <Picker
      selectedValue={selectedTimezone}
      onValueChange={onTimezoneChange}
    >
      {timezones.map((timezone) => (
        <Picker.Item key={timezone} label={timezone} value={timezone} />
      ))}
    </Picker>
  );
};

export default TimezonePickerAtom;
