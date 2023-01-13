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
      text-align: center;
    }

    padding-bottom: 20px;
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

.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    text-align: left;
  }

  h1, h2 {
    margin-bottom: 20px;
  }

  p {
    line-height: 1.5;
    margin-bottom: 20px;
  }

  a {
    color: #fa6068;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
