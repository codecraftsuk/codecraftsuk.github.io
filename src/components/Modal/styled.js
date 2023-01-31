/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const StyledModalWrapper = styled.div`
  color: ${({ theme }) => theme.primaryText};
  width: 90vh;
  position: fixed;
  min-height: 100vh;
  width: 100vw;
  bottom: -120%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100000;
  transition: bottom 500ms;

  ${({ isOpen }) =>
    isOpen &&
    css`
      bottom: 0;
      top: 0;
    `}

  div {
    width: min(70%, 700px);
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 80px 20px 20px 20px;
    border-radius: 6px;
    /* height: 70%; */
    overflow-y: auto;

    ion-icon {
      position: fixed;
      top: 30px;
      right: 30px;
      font-size: 2rem;
      color: red;
      cursor: pointer;
    }

    ${({ theme }) => theme.breakPoints.down('md')} {
      height: 100vh;
      width: 100%;
      padding-top: 140px;

      ion-icon {
        position: fixed;
        top: 80px;
        right: 40px;
        font-size: 3rem;
      }
    }
  }
`;
