/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledContactWrapper = styled.div`
  width: min(95%, 1000px);
  margin: 0 auto;
  margin-top: 40px;

  .back {
    text-align: left;
    /* margin-left: 20px; */
    font-size: 2rem;

    display: flex;
    align-items: center;

    ion-icon {
      cursor: pointer;
      margin-right: 30px;
      font-size: 2.8rem;
      margin-left: -15px;
    }
  }

  .container {
    /* width: 80%; */
    margin: 40px auto;
    text-align: left;
  }

  h1, h2, h3 {
    margin-bottom: 20px;
  }

  p {
    line-height: 1.5;
    margin-bottom: 20px;
  }

  a {
    color: #645dd3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
