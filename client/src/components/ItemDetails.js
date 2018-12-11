import React from 'react';
import PropTypes from 'prop-types';
import ItemImage from './ItemImage';
import ItemPrice from './ItemPrice';
import { Grid, Name, Price } from '../styled-components/ItemDetails';

const ItemDetails = ({ shortName, inflatedPrice, imageUrl }) => (
  <Grid>
    <ItemImage imageUrl={imageUrl} />
    <div>
      <Name>{shortName.toUpperCase()}</Name>
      <ItemPrice
        value={inflatedPrice}
        render={value => <Price>{value}</Price>}
      />
    </div>
  </Grid>
);

ItemDetails.propTypes = {
  shortName: PropTypes.string,
  inflatedPrice: PropTypes.number,
  imageUrl: PropTypes.string,
};

ItemDetails.defaultProps = {
  shortName: '',
  inflatedPrice: null,
  imageUrl: '',
};

export default ItemDetails;
