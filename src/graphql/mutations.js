import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $firstName: String, $lastName: String, $email: String, $birthday: String, $time_zone: String, $lastKnownUpdatedAt: String) {
    updateUser(id: $id, firstName: $firstName, lastName: $lastName, email: $email, birthday: $birthday, time_zone: $time_zone, lastKnownUpdatedAt: $lastKnownUpdatedAt) {
      id
      firstName
      lastName
      email
      birthday
      time_zone
      lastKnownUpdatedAt
    }
  }
`;