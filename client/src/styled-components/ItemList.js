import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin: 128px auto;
  display: grid;
  width: 1024px;
  grid-template-columns: 256px 256px 256px;
  column-gap: 128px;
  row-gap: 128px;
  padding-inline-start: 0;
`;

export const ListElement = styled.li`
  display: block;
`;

export const LinkToDetails = styled(Link)`
  color: initial;
  text-decoration: initial;
`;
