import React from 'react';
import UserListTemplate from '../components/templates/UserListTemplate';
import useUserList from "../hooks/useUserList";
import LoadingIndicatorTemplate from '../components/templates/LoadingIndicatorTemplate';
import ErrorIndicatorTemplate from '../components/templates/ErrorIndicatorTemplate';
import OfflineBanner from '../components/atoms/OfflineBanner';

const UserListScreen = () => {
  const { loading, error, data } = useUserList();

  return (
    <>
      <OfflineBanner />
      {loading && <LoadingIndicatorTemplate />}
      {error && <ErrorIndicatorTemplate errorMessage="Error get user list data" />}
      <UserListTemplate users={data?.users || []} />
    </>
  );
};

export default UserListScreen;
