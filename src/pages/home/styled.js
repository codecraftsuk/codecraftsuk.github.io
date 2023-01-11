/* eslint-disable import/prefer-default-export */
import styled, {
  keyframes
} from 'styled-components';

export const StyledContentWrapper = styled.div `
  width: min(100%, 1500px);
  margin: 0 auto;
  padding: 10px 10px 10px 10px;
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

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
    padding-bottom: 0;
  }

  b.company-subtitle {
      width: min(100%, 900px);
      margin: 0 auto;
      text-align: center;
      padding: 5px 20px 50px 20px;
    }
`;

export const StyledTitleWrapper = styled.div `
  .company-title {
    width: min(100%, 900px);
    margin: 0 auto;
    text-align: center;
    padding-top: 70px;
  }
`;

export const StyledInfoWrapper = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: min(100%, 1000px);
  margin: 0 auto;

  width: min(100%, 1500px);
  margin: 0 auto;

  h1 {
    padding: 70px 20px 0 20px;
    margin-bottom: 40px;
    text-align: center;
  }

  .gif-container {
    padding: 0 20px;
  }

  .carbon-img {
    width: 100%;
    border-radius: 10px;
  }

  p.creative {
    text-align: justify;
    padding: 0 10px;
    font-size: 15px;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {

      h1 {
        padding-left: 62px;
        padding-right: 62px;
      }

      .creative {
        padding: 0 60px;
      }

      .gif-container {
        padding: 0 40px 40px 40px;
      }
    }
  }
`;

export const StyleHome = styled.div `
  .green-content {
    /* margin: 0 -10px; */
    margin-top: 30px;
    color: white;
    padding: 80px 0;
    /* width: 100vw; */
  }
`;

export const StyledDeliveryInfo = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: space-between;

  text-align: center;
  width: min(100%, 1120px);
  margin: 0 auto;

  & > * {
    flex: 1 0 300px;
    /* padding: 13px; */

    & > * {
      margin-bottom: 30px;
    }

    p {
      text-align: justify;
      padding: 13px;
    }
  }
`;

export const StyledMakeTogether = styled.div `
  background-color: ${({ theme }) => theme.quaternary};
  color: ${({ theme }) => theme.primaryText};
  width: 100%;
  margin: 0 auto 0 auto;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  padding: 60px 30px;
  /* height: 420px; */
  flex-direction: column;
  height: 100%;

  h2 {
    margin-bottom: 20px;
  }
`;

export const StyledSlideShow = styled.div `
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

const comeIn = keyframes `
  from {
    transform: translateY(700px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const StyledHomeHead = styled.div `
  min-height: 75vh;
  display: flex;
  align-items: center;
  /* padding: 0px 200px; */
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
  padding: 0 20px;
  width: min(100%, 1500px);
  margin: 0 auto;

  /* animation: ${comeIn} 1000ms ease-in-out; */

  button {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  svg {
    max-width: 400px;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
    flex-direction: column-reverse;
    text-align: center;

    svg {
      max-width: 300px;
    }
  }

  img {
    max-width: min(100%, 500px);
    /* margin-right: 140px; */
  }

  .hero-text {
    max-width: min(100%, 450px);

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

export const StyledTestTestimonialsWrapper = styled.div `
  display: flex;

  & > * {
    flex: 1 0 min(100%, 500px);
  }

  flex-wrap: wrap;
`;