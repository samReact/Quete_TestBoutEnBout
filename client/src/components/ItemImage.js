import React from 'react';
import propTypes from 'prop-types';
import * as StyledImage from '../styled-components/ItemImage';

const ItemImage = ({ imageUrl }) => (
  <StyledImage.Container>
    <StyledImage.Centering>
      <StyledImage.Image src={imageUrl} alt="Item" />
    </StyledImage.Centering>
  </StyledImage.Container>
);

ItemImage.propTypes = {
  imageUrl: propTypes.string.isRequired,
};

export default ItemImage;
