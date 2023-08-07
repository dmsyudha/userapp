import { useQuery, gql } from '@apollo/client';
import { GET_USER } from '../graphql/queries';
import AsyncStorage from "@react-native-async-storage/async-storage";

const useDetailUser = (id) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id },
    onCompleted: (responseData) => {
      console.log(responseData)
      if (responseData && responseData.user) {
        console.log("setup user",`user_${responseData.user.id}_updatedAt`, responseData.user.updatedAt)
          AsyncStorage.setItem(`user_${responseData.user.id}_updatedAt`, responseData.user.updatedAt);
      }
    },
  });

  return { data, loading, error };
};

export default useDetailUser;
