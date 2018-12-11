const mongoose = require('mongoose');

require('../setupDatabase');
const Item = require('../api/items/model');
const items = require('../data/all-items.json');

const getInflatedPrice = price =>
  price ? 50 * Math.floor(price * (1 + Math.random())) : null;

const insert = async item =>
  Item.create({
    ...item,
    inflatedPrice: getInflatedPrice(item.price),
  });

const insertAll = async () => {
  await Promise.all(items.map(insert));
  mongoose.disconnect();
};

// eslint-disable-next-line no-console
insertAll().then(() => console.log('All items have been inserted.'));
