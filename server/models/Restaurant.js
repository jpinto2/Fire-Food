const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    reviews: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ]
  }
);

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;