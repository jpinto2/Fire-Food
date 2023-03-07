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
      address
      name
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($restaurant: [ID]!, $menuItem: String!, $date: String!, $rating: Int!) {
    addReview(restaurant: $restaurant, menuItem: $menuItem, date: $date, rating: $rating) {
      _id
      comment
      date
      menuItem
      rating
    }
  }
`;