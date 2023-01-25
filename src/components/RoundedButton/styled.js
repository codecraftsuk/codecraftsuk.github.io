/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: ${({ isCircle }) => (!isCircle ? '7px 25px' : '5px 10px')};
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '20px')};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;

  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ textColor }) => textColor || 'white'};
  border: none;

  ${({ isCircle }) =>
    isCircle &&
    css`
      font-size: 18px;
    `}

  &:hover {
    /* color: ${({ theme }) => theme.primaryText}; */
    color: white;
    background-color: black;
    transition: all 800ms;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
    padding: ${({ isCircle }) => (!isCircle ? '7px 25px' : '5px 10px')};
  }

  ${({ theme: { breakPoints } }) => breakPoints.up('ml')} {
    font-size: 1rem;
  }
`;
