const request = require('supertest');

const app = require('../../app');
const mongoose = require('../../mockMongooseInMemory');
const { API_ROOT_PATH } = require('../router');
const { ITEMS_ROOT_PATH } = require('./router');
const Item = require('./model');

describe(`Items`, () => {
  const itemsRootQuery = `${API_ROOT_PATH}${ITEMS_ROOT_PATH}/`;

  beforeEach(async () => {
    await mongoose.connect();
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  describe('model', () => {
    it('enforces id uniqueness', async () => {
      await Item.create({ id: 'lol' });
      try {
        await Item.create({ id: 'lol' });
      } catch (error) {
        // duplicate key error
      } finally {
        expect(await Item.countDocuments()).toEqual(1);
      }
    });
  });

  describe('GET', () => {
    describe(itemsRootQuery, () => {
      const items = [{ id: 'lol' }, { id: 'haha' }];

      it('responds with items', async () => {
        await Item.insertMany(items);
        const response = await request(app).get(itemsRootQuery);
        expect(response.statusCode).toBe(200);
        const data = JSON.parse(response.text);
        expect(data).toHaveProperty('items');
        expect(data.items).toHaveLength(2);
        expect(data.items[0].id).toEqual(items[0].id);
        expect(data.items[1].id).toEqual(items[1].id);
      });
    });
  });
});
