// src\screens\UserListScreen.js
import React from 'react';
import { useQuery } from '@apollo/client';
import UserListTemplate from '../components/templates/UserListTemplate';
import { GET_USERS } from '../graphql/queries';
import LoadingIndicatorTemplate from '../components/templates/LoadingIndicatorTemplate';
import ErrorIndicatorTemplate from '../components/templates/ErrorIndicatorTemplate';

const UserListScreen = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <LoadingIndicatorTemplate />;
  if (error) return <ErrorIndicatorTemplate errorMessage="Error get user list data" />;

  return <UserListTemplate users={data.users} />;
};

export default UserListScreen;
