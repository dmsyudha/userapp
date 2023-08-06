import { useMutation, gql } from '@apollo/client';
import { UPDATE_USER } from '../graphql/mutations';
import { useNetwork } from '../contexts/NetworkContext'; // Import this
import { storeMutation } from '../utils/OfflineMutations'; // Import this

const useEditUser = () => {
  const isOnline = useNetwork();
  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);

  const handleUpdateUser = async (variables) => {
    if (isOnline) {
      return updateUser({ variables });
    } else {
      // Store the mutation for later syncing
      await storeMutation({
        mutation: UPDATE_USER,
        variables: variables
      });
    }
  };

  return { updateUser: handleUpdateUser, data, loading, error };
};

export default useEditUser;
