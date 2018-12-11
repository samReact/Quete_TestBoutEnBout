import React from 'react';
import { shallow } from 'enzyme';
import { items } from '../testUtils';
import ItemList from './ItemList';

describe('ItemList', () => {
  describe('when passed no items', () => {
    it('renders empty list', () => {
      const wrapper = shallow(<ItemList />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when passed items', () => {
    it('should display items', async () => {
      await expect(page).toMatchElement(
        'ul[data-selector=item-list] li[data-selector=item-list-element]'
      );
    });
  });
});
