/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  /* width: min(100%, 400px); */
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    flex: 1 0;
  }
  margin: 10px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 00px 20px gray;
  overflow: hidden;

  div {
    margin: 10px;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 500ms;
  }

  &:not(:hover) {
    transition: transform 500ms;
  }
`;
