/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  width: min(100%, 300px);
  img {
    width: 100%;
  }
  margin: 10px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 00px 20px gray;

  div {
    margin: 10px;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 500ms;
  }
`;
