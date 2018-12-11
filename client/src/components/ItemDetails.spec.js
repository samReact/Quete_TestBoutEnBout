import React from 'react';
import { shallow } from 'enzyme';
import { items } from '../testUtils';
import ItemDetails from './ItemDetails';

describe('ItemDetails', () => {
  describe('when passed no props', () => {
    it('renders without crashing', () => {
      shallow(<ItemDetails />);
      // TODO: cleanup rendering
    });
  });

  describe('when passed item props', () => {
    const props = { ...items[0] };

    it('renders correctly', () => {
      const wrapper = shallow(<ItemDetails {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
