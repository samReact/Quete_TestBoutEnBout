import styled from 'styled-components';
import { Name as ItemName, Price as ItemPrice } from './Item';

export const Grid = styled.div`
  margin: 128px auto;
  display: grid;
  width: 1024px;
  grid-template-columns: 464px 464px;
  column-gap: 96px;
  padding-inline-start: 0;
`;

export const Name = styled(ItemName)`
  margin-top: 48px;
  text-align: initial;
  font-size: 36px;
`;

export const Price = styled(ItemPrice)`
  margin-top: 16px;
  text-align: initial;
  font-size: 24px;
`;
