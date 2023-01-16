/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledContactWrapper = styled.div`
  width: min(95%, 1000px);
  margin: 0 auto;
  margin-top: 40px;

  h1 {
    font-size: 3rem;
  }

  .back {
    text-align: left;
    /* margin-left: 20px; */
    font-size: 2rem;

    h1 {
      margin-bottom: -2px;
    }

    display: flex;
    align-items: center;

    ion-icon {
      cursor: pointer;
      margin-right: 30px;
      color: red;
      font-size: 2.8rem;
      margin-left: -15px;
    }
  }

  .container {
    /* width: 80%; */
    margin: 40px auto;
    text-align: left;
  }

  h1,
  h2 {
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
