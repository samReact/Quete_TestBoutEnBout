import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

export const Centering = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin-bottom: 48px;
`;
