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
    background: red;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    /* transform: rotate(35deg); */
    /* translate: 95px 60px; */
    outline: 3px solid white;
    border: 3px solid black;
    margin: 0;
    top: 30%;
    transform: translateY(-10%);
    padding: 10px 0;
    color: black;
  }
`;
