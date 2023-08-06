// src\components\atoms\BirthdayPickerAtom.js
import React, { useState } from 'react';
import { View, Button, Platform, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BirthdayPickerAtom = ({ selectedDate, onDateChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');  // For iOS, we'll keep the picker open
    onDateChange(selectedDate || selectedDate);
  };

  return (
    <View>
      <Text style={styles.label}>Birthday</Text>
      <Button title={selectedDate ? selectedDate.toDateString() : "Select Birthday"} onPress={() => setShowPicker(true)} />

      {showPicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date()}  // To ensure user doesn't select a future date for birthday
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    label: {
      fontSize: 18,
      marginBottom: 8,   // spacing between the label and the input field
      color: '#333',     // a subtle dark gray color
      fontWeight: 'bold'
    },
  });

export default BirthdayPickerAtom;
