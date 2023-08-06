import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $birthday: String!, $location: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, birthday: $birthday, location: $location) {
      id
      firstName
      lastName
      email
      birthday
      location
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $firstName: String, $lastName: String, $email: String, $birthday: String, $location: String) {
    updateUser(id: $id, firstName: $firstName, lastName: $lastName, email: $email, birthday: $birthday, location: $location) {
      id
      firstName
      lastName
      email
      birthday
      location
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;