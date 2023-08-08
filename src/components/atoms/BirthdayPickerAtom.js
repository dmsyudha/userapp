import React, { useState } from "react";
import {
  View,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput, IconButton } from "react-native-paper";

const BirthdayPickerAtom = ({ selectedDate, onDateChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios"); // For iOS, we'll keep the picker open
    if (selectedDate) {
      onDateChange(selectedDate);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => setShowPicker(true)}>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <IconButton
            icon="calendar"
            size={20}
            style={styles.iconButton}
            onPress={() => setShowPicker(true)}
            testID="iconButton"
            iconColor="#ffffff"
          />
          <TextInput
            label="Birthday"
            value={selectedDate ? selectedDate.toDateString() : ""}
            mode="outlined"
            style={styles.textInput}
            testID="birthdayInput"
            pointerEvents="none" // This ensures that the inner elements of TextInput don't capture the press event
          />
        </View>

        {showPicker && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            testID="dateTimePicker"
            onChange={onChange}
            maximumDate={new Date()} // To ensure user doesn't select a future date for birthday
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row', 
    alignItems: 'center', 
    zIndex: 1, 
  },
  iconButton: {
    backgroundColor: '#6200ee', 
    marginRight: 10,
  },
  textInput:{
    flex: 1
  }
});

export default BirthdayPickerAtom;
