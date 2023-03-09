const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema(
  {
    restaurantId: {
        type: String,
        required: true,
    },
    reviewUser: {
        type: String,
        required: true,
    },
    menuItem: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    comment: {
        type: String,
        required: false,
    }
  }
);

const Review = model('Review', reviewSchema);

module.exports = Review;