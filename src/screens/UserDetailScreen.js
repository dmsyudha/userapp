// ./src/screens/UserDetailScreen.js

import React from 'react';
import UserDetailTemplate from '../components/templates/UserDetailTemplate';
import useDetailUser from '../hooks/useDetailUser';
import LoadingIndicatorTemplate from '../components/templates/LoadingIndicatorTemplate';
import ErrorIndicatorTemplate from '../components/templates/ErrorIndicatorTemplate';

const UserDetailScreen = ({ route }) => {
    const { id } = route.params;
    const { loading, error, data } = useDetailUser(id);

    if (loading) return <LoadingIndicatorTemplate />;
    if (error) return <ErrorIndicatorTemplate errorMessage="Error get user details" />;

    return (
        <UserDetailTemplate user={data.user} />
    );
};

export default UserDetailScreen;
