/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 300;

  flex-direction: column;
  /* width: min(100%, 280px); */
  flex: 1 0 min(100%, 280px);
  height: 100%;

  ${({ alignLeft }) =>
    !alignLeft &&
    css`
      align-items: center;
    `}

  ion-icon {
    font-size: 3.5rem;
    background-color: ${({ theme }) => theme.tertiary};
    color: white;
    margin-bottom: 15px;

    ${({ bigTitle }) =>
      !bigTitle &&
      css`
        border-radius: 50%;
        font-size: ${({ alignLeft }) => (alignLeft ? '1.4rem' : '2.5rem')};
        margin-bottom: ${({ alignLeft }) => (alignLeft ? '10px' : '20px')};
        padding: ${({ alignLeft }) => (alignLeft ? '10px' : '25px')};

        &:hover {
          background-color: #2f2e41;
          transition: all 1000ms;
        }
      `}
  }

  h3 {
    margin-bottom: ${({ alignLeft }) => (alignLeft ? '10px' : '15px')};
  }

  p {
    font-size: 14.4px !important;
  }
`;
