/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
  width: min(100%, 1500px);
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  .members {
    ion-icon {
      font-size: 8rem;
    }
    gap: 30px;

    span {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: min(100%, 700px);
  margin: 0 auto;
  padding: 70px 20px;

  h1 {
    margin-bottom: 20px;
  }
`;

export const StyleHome = styled.div`
  .green-content {
    /* margin: 0 -10px; */
    margin-top: 30px;
    color: white;
    padding: 80px 0;
    /* width: 100vw; */
  }
`;

export const StyledDeliveryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 50px 0;

  text-align: left;

  img {
    width: 50%;
  }

  & > * {
    flex: 1;
    padding: 20px;

    & > * {
      margin-bottom: 30px;
    }

    p {
      text-align: left;
    }
  }
`;
