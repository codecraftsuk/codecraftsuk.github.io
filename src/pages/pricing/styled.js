/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledPricingWrapper = styled.div`
  width: min(90%, 1000px);
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 100px;
  padding-bottom: 30px;

  h1 {
    margin-bottom: -1px;
  }

  .back {
    text-align: left;
    /* margin-left: 20px; */
    font-size: 2.8rem;

    display: flex;
    align-items: center;

    ion-icon {
      cursor: pointer;
      margin-right: 30px;
      margin-left: -15px;
    }
  }

  p {
    margin: 40px 0;
    font-size: 18px;
    /* width: min(800px, 100%); */
    /* padding: 25px; */
  }

  .text-content {
    text-align: justify;
  }

  .price-cards {
    display: flex;
    /* flex-wrap: wrap; */
    width: min(90%, 1000px);
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    /* align-items: flex-end; */

    div:nth-child(2) {
      ${({ theme: { breakPoints } }) => breakPoints.up('md')} {
        transform: translateX(-6px);
      }
    }

    ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
      flex-wrap: wrap;
    }
  }
`;

export const StyledPriceCard = styled.div`
  /* border: 1px solid; */
  width: 400px;
  border-radius: 7px;
  padding: 40px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  & > * {
    margin: 0 !important;
    padding: 0 !important;
  }

  .price {
    font-size: 4rem;
    font-weight: 300;
    display: flex;

    &:before {
      content: '£';
      font-size: 2rem;
      text-align: start;
    }
  }

  h4 {
    margin-bottom: 7px;
    font-weight: 500;
  }

  button {
    width: 85%;
    padding: 15px 0 !important;
    background: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    color: inherit;
    border: 1px solid ${({ theme }) => theme.primaryText};

    &.dark {
      background-color: ${({ theme }) => theme.tertiary};
      color: white;
      border: none;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  img {
    width: 65%;
  }
`;
