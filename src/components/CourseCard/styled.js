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
  position: relative;

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

  .coming-soon {
    position: absolute;
    background: #ffb900;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    transform: rotate(45deg);
    translate: 115px -70px;
    outline: 3px solid #4b3600;
    border: 3px solid #ffb900;
    margin: 0;
    top: 30%;
    padding: 10px 0;
    color: black;
  }
`
