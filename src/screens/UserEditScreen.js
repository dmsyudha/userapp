import React from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import UserEditTemplate from '../components/templates/UserEditTemplate';
import useEditUser from '../hooks/useEditUser';
import LoadingIndicatorTemplate from '../components/templates/LoadingIndicatorTemplate';
import ErrorIndicatorTemplate from '../components/templates/ErrorIndicatorTemplate';
import OfflineBanner from '../components/atoms/OfflineBanner';
import useDetailUser from '../hooks/useDetailUser';

const UserEditScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const { updateUser, loading: editLoading, error: editError } = useEditUser();
  const { data, loading: detailLoading, error: detailError } = useDetailUser(id);

  const handleUpdateUser = (updatedUser) => {
    updateUser({ variables: updatedUser })
      .then(() => {
        Alert.alert('Success', 'User updated successfully');
        navigation.goBack();
      })
      .catch((graphQLError) => {
        Alert.alert('Error', graphQLError.message);
      });
  };

  if (editLoading || detailLoading) return <LoadingIndicatorTemplate />;
  if (editError || detailError)
    return <ErrorIndicatorTemplate errorMessage="Error update user data" />;

  return (
    <ScrollView style={styles.container}>
      <OfflineBanner />
      <UserEditTemplate user={data.user} onUpdate={handleUpdateUser} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5' // Material design background color
  }
});

export default UserEditScreen;
