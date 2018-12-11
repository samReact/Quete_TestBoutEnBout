import React from 'react';
import { shallow } from 'enzyme';
import { items } from '../testUtils';
import { Price } from '../styled-components/ItemDetails';
import ItemPrice from './ItemPrice';

describe('ItemPrice', () => {
  describe('when passed no value', () => {
    it('renders text "Contact us"', () => {
      const wrapper = shallow(<ItemPrice />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when passed value', () => {
    const value = items[0].inflatedPrice;

    it('renders price value', () => {
      const wrapper = shallow(<ItemPrice value={value} />);
      expect(wrapper).toMatchSnapshot();
    });

    describe('when passed render prop', () => {
      const render = val => <Price>{val}</Price>;

      it('renders price value with render prop', () => {
        const wrapper = shallow(<ItemPrice value={value} render={render} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(Price)).toHaveLength(1);
      });
    });
  });
});
