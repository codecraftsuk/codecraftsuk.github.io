/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const StyledModalWrapper = styled.div`
  color: black;
  width: 90vh;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: -120%;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 100000;
  transition: top 500ms;

  ${({ isOpen }) =>
    isOpen &&
    css`
      top: 0;
    `}

  div {
    width: 90%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 60px 20px 20px 20px;
    border-radius: 6px;
    height: 50%;
    overflow-y: scroll;

    ion-icon {
      position: fixed;
      top: 20px;
      right: 20px;
      font-size: 2rem;
      color: red;
      cursor: pointer;
    }
  }
`;
