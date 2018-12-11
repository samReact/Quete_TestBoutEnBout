const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    title: String,
    url: String,
    largestImageUrl: String,
    categories: [String],
    endCategory: String,
    shortName: String,
    priceRaw: String,
    price: Number,
    inflatedPrice: Number,
  },
  { collection: 'items' }
);

module.exports = mongoose.model('Item', schema);
