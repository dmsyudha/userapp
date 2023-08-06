// src\components\templates\ErrorIndicatorTemplate.js
import React from "react";
import { View, Text } from "react-native";
import TextAtom  from "../atoms/TextAtom";

const ErrorIndicatorTemplate = ({ errorMessage }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextAtom text={`Error: ${errorMessage}`} />
    </View>
  );
};

export default ErrorIndicatorTemplate;
