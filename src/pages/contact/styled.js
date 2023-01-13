/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledContactWrapper = styled.div`
  width: min(95%, 1200px);
  margin: 0 auto;
  margin-top: 40px;

  .back {
    text-align: left;
    /* margin-left: 20px; */
    h1 {
      font-size: 2.7rem;
    }

    display: flex;
    align-items: center;

    ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
      justify-content: center;
    }

    ion-icon {
      cursor: pointer;
      margin-right: 30px;
      color: red;
      font-size: 2.8rem;
    }
  }
`;
