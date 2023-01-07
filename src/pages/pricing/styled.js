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
    margin-left: 20px;
    font-size: 2.8rem;
    padding: 10px 30px;

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
    width: 50%;
    margin: 0 auto;
    font-size: 18px;
  }
`;
