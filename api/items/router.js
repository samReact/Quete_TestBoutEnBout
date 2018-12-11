const router = require('express').Router();

const { getItems } = require('./controllers');

router.get('/', async (req, res) => {
  const items = await getItems();
  res.json({ items });
});

module.exports = router;
module.exports.ITEMS_ROOT_PATH = '/items';
