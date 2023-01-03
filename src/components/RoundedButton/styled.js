/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 12px 50px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ textColor }) => textColor || 'white'};
  border: 1.5px solid ${({ bgColor }) => bgColor || ''};

  &:hover {
    color: ${({ theme }) => theme.tertiary};
    background-color: white;
  }
`;
