import React from 'react';
import PropTypes from 'prop-types';
import { Name } from '../styled-components/Item';
import {
  List,
  ListElement,
  LinkToDetails,
} from '../styled-components/ItemList';
import ItemImage from './ItemImage';
import ItemPrice from './ItemPrice';

const ItemList = ({ items }) => (
  <List data-selector="item-list">
    {items.map(item => (
      <ListElement data-selector="item-list-element" key={item.id}>
        <LinkToDetails to={`/items/${item.id}`}>
          <ItemImage imageUrl={item.largestImageUrl} />
          <Name>{item.shortName.toUpperCase()}</Name>
          <ItemPrice value={item.inflatedPrice} />
        </LinkToDetails>
      </ListElement>
    ))}
  </List>
);

ItemList.propTypes = {
  items: PropTypes.array,
};

ItemList.defaultProps = {
  items: [],
};

export default ItemList;
