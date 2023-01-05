/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

export const StyledContentWrapper = styled.div`
  width: min(100%, 1500px);
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  .members {
    ion-icon {
      font-size: 12rem;
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
  max-width: min(100%, 1000px);
  margin: 0 auto;
  padding: 70px 20px;
  width: min(100%, 1500px);
  margin: 0 auto;

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
  align-items: center;

  text-align: left;
  width: min(100%, 1500px);
  margin: 0 auto;

  img {
    width: 50%;
  }

  & > * {
    flex: 1 0 300px;
    padding: 20px;

    & > * {
      margin-bottom: 30px;
    }

    p {
      text-align: left;
    }
  }
`;

export const StyledMakeTogether = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  color: white;
  width: min(100%, 1500px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 60px 30px;
  h2 {
    margin-bottom: 20px;
  }
`;

export const StyledSlideShow = styled.div`
  font-size: 6rem;
  padding: 40px 0px;
  overflow: hidden;

  span {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    display: flex;

    -moz-animation: my-animation 10s linear infinite;
    -webkit-animation: my-animation 10s linear infinite;
    animation: my-animation 10s linear infinite;

    & > ion-icon {
      margin-right: 80px;

      ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
        margin-right: 25px;
      }

      ${({ theme: { breakPoints } }) => breakPoints.up('lg')} {
        margin-right: 200px;
      }
    }
  }

  @-moz-keyframes my-animation {
    from {
      -moz-transform: translateX(100%);
    }
    to {
      -moz-transform: translateX(-100%);
    }
  }

  /* for Chrome */
  @-webkit-keyframes my-animation {
    from {
      -webkit-transform: translateX(100%);
    }
    to {
      -webkit-transform: translateX(-100%);
    }
  }

  @keyframes my-animation {
    from {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    to {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;

export const StyledSocials = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 100px 20px;
  text-align: center;
  color: white;

  width: min(100%, 1500px);
  margin: 0 auto;

  p {
    margin-bottom: 20px;
  }

  ion-icon {
    font-size: 2rem;
    background-color: white;
    margin-right: 20px;
    padding: 20px;
    border-radius: 50%;
    cursor: pointer;
    color: ${({ theme }) => theme.tertiary};

    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      color: white;
      transition: 500ms;
    }
  }
`;

const comeIn = keyframes`
  from {
    transform: translateY(700px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const StyledHomeHead = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  /* padding: 0px 200px; */
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
  padding: 0 20px;
  width: min(100%, 1500px);
  margin: 0 auto;

  /* animation: ${comeIn} 1000ms ease-in-out; */

  svg {
    max-width: 400px;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
    flex-direction: column-reverse;
    text-align: center;
    margin-top: 50px;

    img {
      margin-bottom: 20px;
    }
  }

  img {
    max-width: min(100%, 500px);
    /* margin-right: 140px; */
  }

  .hero-text {
    /* padding: 0 150px; */
    max-width: min(100%, 600px);

    & > * {
      margin-bottom: 20px;
      flex: 1 0;
    }
  }

  h1 {
    font-size: 3rem;
  }

  /* & > * {
    flex: 1 0;
  } */

  p {
    font-size: 20px;
  }
`;
