import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useUserList = () => {
  const { data, loading, error } = useQuery(GET_USERS);

  return { data, loading, error };
};

export default useUserList;
