// src\screens\UserListScreen.js
import React from 'react';
import { useQuery } from '@apollo/client';
import UserListTemplate from '../components/templates/UserListTemplate';
import useUserList from "../hooks/useUserList";
import LoadingIndicatorTemplate from '../components/templates/LoadingIndicatorTemplate';
import ErrorIndicatorTemplate from '../components/templates/ErrorIndicatorTemplate';
import OfflineBanner from '../components/atoms/OfflineBanner';

const UserListScreen = () => {
  const { loading, error, data } = useUserList();

  if (loading) return <LoadingIndicatorTemplate />;
  if (error) return <ErrorIndicatorTemplate errorMessage="Error get user list data" />;
  
  return (
    <>
      <OfflineBanner />
      <UserListTemplate users={data.users} />
    </>
  );
};

export default UserListScreen;
