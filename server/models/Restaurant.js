const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      unique: true,
      required: true,
    },
    reviews: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    }
  }
);

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;