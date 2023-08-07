import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserDetailTemplate from '../components/templates/UserDetailTemplate';
import useUserDetail from '../hooks/useDetailUser';
import LoadingIndicatorTemplate from '../components/templates/LoadingIndicatorTemplate';
import ErrorIndicatorTemplate from '../components/templates/ErrorIndicatorTemplate';
import OfflineBanner from '../components/atoms/OfflineBanner';

const UserDetailScreen = ({ route }) => {
  const { loading, error, data } = useUserDetail(route.params.id);

  return (
    <View style={styles.container}>
      <OfflineBanner />
      {loading && <LoadingIndicatorTemplate />}
      {error && <ErrorIndicatorTemplate errorMessage="Error fetching user details" />}
      {data && <UserDetailTemplate user={data.user} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default UserDetailScreen;
