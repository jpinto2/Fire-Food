import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query Query {
        user {
            _id
            email
            username
            reviews {
                _id
                comment
                date
                menuItem
                rating
                restaurant {
                    _id
                    address
                    name
                }
            }
        }
    }
`;

export const QUERY_RESTAURANTS = gql`
query getRestaurants($name: String, $address: String) {
    restaurants(name: $name, address: $address) {
      _id
      address
      name
      reviews {
        _id
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
      address
      name
      reviews {
        _id
        comment
        date
        menuItem
        rating
      }
    }
  }
`