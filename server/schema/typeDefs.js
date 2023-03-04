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
    restaurant: Restaurant
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
    restaurant: Restaurant
    user: User
   }

   type Mutation {
    addUser(username: String!, email: String!, email: String!, password: String!): Auth
    addRestaurant(name: String!, address: String!): Restaurant
    addReview(restaurant: [ID]!, menuItem: String!, date: String!, rating: Int!, comment: String): Review
    login(username: String!, password: String!): Auth
   }
`
module.exports = typeDefs