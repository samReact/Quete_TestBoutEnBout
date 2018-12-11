const router = require('express').Router();

const items = require('./items/router');
const { ITEMS_ROOT_PATH } = require('./items/router');

router.use(ITEMS_ROOT_PATH, items);

module.exports = router;
module.exports.API_ROOT_PATH = '/api';
