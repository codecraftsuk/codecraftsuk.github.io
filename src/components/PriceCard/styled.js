import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledPriceCard = styled.div`
  /* padding: 10px; */
  overflow: hidden;
  text-align: center;
  padding-bottom: 20px;
  height: fit-content;
  box-shadow: 20px 20px 30000px grey;

  border-radius: 7px;
  margin: 0px 10px;
  width: min(100%, 400px);

  .head {
    color: black;
    background-color: white;
    font-size: 1.7rem;
    padding: 20px 0;

    p {
      margin: 0;
      padding: 0;
    }
  }

  h2 {
    margin: 10px 0;
  }

  h4 {
    margin: 10px 0;
  }
`;
