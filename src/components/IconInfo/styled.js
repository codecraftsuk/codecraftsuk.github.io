/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: min(100%, 280px); */
  flex: 1 0 min(100%, 280px);

  ion-icon {
    font-size: 3.5rem;
    background-color: ${({ theme }) => theme.tertiary};
    color: white;
    margin-bottom: 15px;

    ${({ bigTitle }) =>
      !bigTitle &&
      css`
        border-radius: 50%;
        font-size: 2.5rem;
        margin-bottom: 20px;
        padding: 25px;

        &:hover {
          background-color: #2f2e41;
          transition: all 1000ms;
        }
      `}
  }

  h3 {
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
  }
`;
