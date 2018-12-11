import React from 'react';
import PropTypes from 'prop-types';
import { Price } from '../styled-components/Item';

const ItemPrice = ({ value, render }) =>
  render(value ? `€${value}` : 'Contact us');

ItemPrice.propTypes = {
  value: PropTypes.number,
  render: PropTypes.func,
};

ItemPrice.defaultProps = {
  value: null,
  render: value => <Price>{value}</Price>,
};

export default ItemPrice;
