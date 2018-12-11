import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import { MemoryRouter } from 'react-router-dom';

import { API_ROOT_PATH, ITEMS_ROOT_PATH } from './pathConstants';
import { items } from './testUtils';
import ItemDetails from './components/ItemDetails';
import ItemList from './components/ItemList';
import App from './App';

describe('App', () => {
  const response = { items };

  beforeEach(() => {
    fetchMock.mock(`${API_ROOT_PATH}${ITEMS_ROOT_PATH}/`, response);
  });

  afterEach(() => {
    fetchMock.reset();
  });

  describe('on root path', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });

    describe('before items fetched', () => {
      it('passes empty array to ItemList', () => {
        const itemList = wrapper.find(ItemList);
        expect(itemList.prop('items')).toEqual([]);
      });
    });

    describe('after items fetched', () => {
      it('passes items to ItemList', done => {
        setImmediate(() => {
          wrapper.update();
          const itemList = wrapper.find(ItemList);
          expect(itemList.prop('items')).toEqual(response.items);
          done();
        });
      });
    });
  });

  describe('on path "/items/:id"', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter initialEntries={[`/items/${items[0].id}`]}>
          <App />
        </MemoryRouter>
      );
    });

    describe('before items fetched', () => {
      it('renders item details with empty props', () => {
        const itemDetails = wrapper.find(ItemDetails);
        expect(itemDetails.props()).toEqual(ItemDetails.defaultProps);
      });
    });

    describe('after items fetched', () => {
      it('renders item details', done => {
        setImmediate(() => {
          wrapper.update();
          const itemDetails = wrapper.find(ItemDetails);
          expect(itemDetails.props()).toEqual({
            shortName: items[0].shortName,
            inflatedPrice: items[0].inflatedPrice,
            imageUrl: items[0].largestImageUrl,
          });
          done();
        });
      });
    });
  });
});
