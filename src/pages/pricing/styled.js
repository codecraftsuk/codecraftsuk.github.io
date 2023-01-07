/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledPricingWrapper = styled.div`
  width: min(100%, 1500px);
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 30px;

  h1 {
    font-size: 3rem;
  }

  .back {
    text-align: left;
    /* margin-left: 20px; */
    font-size: 2.8rem;

    display: flex;
    align-items: center;

    ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
      justify-content: center;
    }

    ion-icon {
      cursor: pointer;
      margin-right: 30px;
      color: red;
    }
  }

  p {
    margin: 0 auto;
    font-size: 18px;
    width: min(800px, 100%);
    padding: 25px;
  }

  .price-cards {
    display: flex;
    /* flex-wrap: wrap; */
    width: min(100%, 1000px);

    margin: 0 auto;
    align-items: flex-end;

    ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
      flex-wrap: wrap;
    }
  }
`;
