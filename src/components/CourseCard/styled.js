/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 0px 5px 20px gray;
  border-radius: 6px;
  padding: 10px;
  margin: 30px 0;

  ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
    flex-wrap: wrap;
    justify-content: center;
  }

  img {
    width: 150px;
    border-radius: 50%;
    height: 150px;
    object-fit: cover;
    margin-right: 20px;
  }

  span {
    width: 80%;
  }

  span > * {
    text-align: left;
  }

  p {
    margin-bottom: 10px;
    overflow: hidden;
    white-space: wrap;
    width: 100%;
    height: 3rem;
  }

  button {
    margin-right: 10px;
  }

  .btns {
    display: flex;
    justify-content: flex-end;

    ion-icon {
      font-size: 30px;
    }

    button {
      padding: 5px 20px;
    }
  }
`;
