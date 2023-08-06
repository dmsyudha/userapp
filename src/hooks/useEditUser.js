import { useMutation, gql } from '@apollo/client';
import { UPDATE_USER } from '../graphql/mutations';

const useEditUser = () => {
  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);

  return { updateUser, data, loading, error };
};

export default useEditUser;
