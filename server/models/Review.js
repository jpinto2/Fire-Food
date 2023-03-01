const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
    menuItem: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    comment: {
        type: String,
        required: true,
    }
  }
);

const Review = model('Review', reviewSchema);

module.exports = Review;