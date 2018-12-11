const Item = require('./model');

const getItems = () => Item.find();

module.exports = { getItems };
