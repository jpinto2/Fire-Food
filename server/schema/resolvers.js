const { AuthenticationError } = require('apollo-server-express');
const { User, Restaurant, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        restaurants: async () => {
            return await Restaurant.find()
        },
        restaurant: async (parent, { _id }) => {
            const restaurant = await Restaurant.findById(_id).populate({
                populate: 'review'
            });

            return restaurant;
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    populate: 'review'
                });
      
                return user;
            }
      
            throw new AuthenticationError('Not logged in');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addRestaurant: async (parent, args, context) => {
            if (context.user) {
                const restaurant = await Restaurant.create(args);

                return restaurant;
            }

            throw new AuthenticationError('Incorrect credentials'); 
        },
        addReview: async (parent, args, context) => {
            if (context.user) {
                const review = await Review.create(args);

                return review;
            }

            throw new AuthenticationError('Incorrect credentials');
        },
        login: async () => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
}

module.exports = resolvers