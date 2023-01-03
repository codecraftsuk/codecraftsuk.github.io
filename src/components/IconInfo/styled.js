/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: min(100%, 280px);

  ion-icon {
    font-size: 2.5rem;
    background-color: ${({ theme }) => theme.tertiary};
    padding: 25px;
    color: white;
    border-radius: 50%;
    margin-bottom: 20px;

    &:hover {
      background-color: black;
      transition: all 1000ms;
    }
  }

  h3 {
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
  }
`;
