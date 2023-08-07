import { useMutation, gql } from "@apollo/client";
import { UPDATE_USER } from "../graphql/mutations";
import { useNetwork } from "../contexts/NetworkContext";
import { storeMutation } from "../utils/OfflineMutations";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useEditUser = () => {
  const { isOnline } = useNetwork();
  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);

  const handleUpdateUser = async (variables) => {
    
    const lastKnownUpdatedAt = await AsyncStorage.getItem(
      `user_${variables.id}_updatedAt`
    );
    // Check if lastKnownUpdatedAt exists
    if (!lastKnownUpdatedAt) {
      console.log(lastKnownUpdatedAt);
      throw new Error(variables);
    }
    console.log({ variables: { ...variables, lastKnownUpdatedAt } });
    if (isOnline) {
      return updateUser({ variables: { ...variables, lastKnownUpdatedAt } });
    } else {
      await storeMutation({
        mutation: UPDATE_USER,
        variables: { ...variables, lastKnownUpdatedAt },
      });
    }
  };

  return { updateUser: handleUpdateUser, data, loading, error };
};

export default useEditUser;
