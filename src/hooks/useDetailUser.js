import { useQuery, gql } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useDetailUser = (id) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id },
  });

  return { data, loading, error };
};

export default useDetailUser;
