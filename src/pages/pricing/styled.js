/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledPricingWrapper = styled.div`
  width: min(95%, 1000px);
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 30px;

  h1 {
  margin-bottom: -1px;
}
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
    width: min(95%, 1000px);

    margin: 0 auto;
    align-items: flex-end;

    ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
      flex-wrap: wrap;
    }
  }
`;
