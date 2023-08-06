import { useQuery, gql } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';

const useUserList = (id) => {
  const { data, loading, error } = useQuery(GET_USERS, {
    variables: { id },
  });

  return { data, loading, error };
};

export default useUserList;
