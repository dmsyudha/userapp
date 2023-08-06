import React from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import UserEditTemplate from "../components/templates/UserEditTemplate";
import useEditUser from "../hooks/useEditUser";
import LoadingIndicatorTemplate from '../components/templates/LoadingIndicatorTemplate';
import ErrorIndicatorTemplate from '../components/templates/ErrorIndicatorTemplate';

const UserEditScreen = ({ route, navigation }) => {
  const { user } = route.params;

  const { updateUser, loading, error } = useEditUser();

  const handleUpdateUser = (updatedUser) => {
    updateUser({ variables: updatedUser })
      .then(() => {
        Alert.alert("Success", "User updated successfully");
        navigation.goBack();
      })
      .catch(() => {
        Alert.alert("Error", "There was an error updating the user");
      });
  };

  if (loading) return <LoadingIndicatorTemplate />;
  if (error) return <ErrorIndicatorTemplate errorMessage="Error update user data" />;

  return <UserEditTemplate user={user} onUpdate={handleUpdateUser} />;
};

export default UserEditScreen;
