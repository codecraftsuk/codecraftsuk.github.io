/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: ${({ isCircle }) => (!isCircle ? '7px 50px' : '5px 10px')};
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '20px')};
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ textColor }) => textColor || 'white'};
  border: 1.5px solid ${({ bgColor }) => bgColor || ''};

  ${({ isCircle }) =>
    isCircle &&
    css`
      font-size: 18px;
    `}

  &:hover {
    color: ${({ theme }) => theme.tertiary};
    background-color: white;
    transition: all 800ms;
  }
`;