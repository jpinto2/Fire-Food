const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type Restaurant {
    _id: ID
    name: String
    address: String
    reviews: [Review]
   }

   type Review {
    _id: ID
    restaurantId: String
    reviewUser: String
    menuItem: String
    date: String
    rating: Int
    comment: String
   }

   type User {
    _id: ID
    username: String
    email: String
    reviews: [Review]
   }

   type Auth {
    token: ID
    user: User
   }

   type Query {
    restaurants(name: String!, address: String): [Restaurant]
    restaurant(restaurantId: ID!): Restaurant
    reviews: [Review]
    restaurantReviews(restaurantId: String!): [Review]
    userReviews(username: String!): [Review]
    user: User
   }

   type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addRestaurant(name: String!, address: String!): Restaurant
    addReview(restaurantId: String!, reviewUser: String!, menuItem: String!, rating: Int!, comment: String): Review
    login(username: String!, password: String!): Auth
   }
`
module.exports = typeDefs