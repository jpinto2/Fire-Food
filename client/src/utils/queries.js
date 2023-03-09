import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query Query {
        user {
            _id
            username
            email
            reviews {
                _id
                comment
                date
                menuItem
                rating
                restaurant {
                    _id
                    name
                    address
                }
            }
        }
    }
`;

export const QUERY_RESTAURANTS = gql`
query getRestaurants($name: String!, $address: String!) {
    restaurants(name: $name, address: $address) {
      _id
      name
      address
      reviews {
        _id
        reviewUser
        comment
        date
        menuItem
        rating
      }
    }
  }
`;

export const QUERY_SINGLE_RESTAURANT = gql`
query getRestaurant($restaurantId: ID!) {
    restaurant(restaurantId: $restaurantId) {
      _id
      name
      address
      reviews {
        _id
        reviewUser
        comment
        date
        menuItem
        rating
      }
    }
  }
`

export const QUERY_RESTAURANT_REVIEWS = gql`
query getRestaurantReviews($restaurantId: String!) {
  restaurantReviews(restaurantId: $restaurantId) {
    reviewUser
    date
    menuItem
    rating
    comment
  }
}
`

export const QUERY_USER_REVIEWS = gql`
query getUserReviews($username: String!) {
  userReviews(username: $username) {
    restaurantId
    date
    menuItem
    rating
    comment
  }
}
`