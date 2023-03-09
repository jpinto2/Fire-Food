import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RESTAURANT = gql`
  mutation addRestaurant($name: String!, $address: String!) {
    addRestaurant(name: $name, address: $address) {
      _id
      name
      address
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($restaurantId: String!, $reviewUser: String!, $menuItem: String!, $rating: Int!, $comment: String) {
    addReview(restaurantId: $restaurantId, reviewUser: $reviewUser, menuItem: $menuItem, rating: $rating, comment: $comment) {
      _id
      comment
      date
      menuItem
      rating
    }
  }
`;