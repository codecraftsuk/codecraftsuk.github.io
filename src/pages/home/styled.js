/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

export const StyledContentWrapper = styled.div`
  width: min(95%, 1000px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: ${({ pt }) => pt || '100'}px;
  padding-bottom: 100px;

  .why-us-btn {
    margin: 0 auto !important;
  }

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

  .why-us-title {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const StyledTitleWrapper = styled.div`
  .company-title {
    text-align: left;
    padding-top: 70px;
    margin: 0 auto;

    ${({ theme: { breakPoints } }) => breakPoints.up('md')} {
      /* margin-bottom: -80px; */
    }
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  /* max-width: ; */
  margin: 0 auto;

  h1 {
    /* padding: 70px 20px 0 20px; */
    padding-top: 70px;
    margin-bottom: 30px;
    font-size: 32px;
    /* text-align: center; */
  }

  .carbon-img {
    margin: 0;
    max-width: 100%;
    border-radius: 10px;
  }

  img {
    transform: scale(1.7);
  }

  p.creative {
    text-align: justify;
    margin-bottom: 10px;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
    h1 {
      padding-top: 30px;
      /* padding-left: 30px; */
      /* padding-right: 30px; */
      padding-bottom: 20px;
      margin-bottom: 0;
    }

    .creative {
      /* padding: 0 30px; */
    }

    img {
      transform: scale(0.5);
    }
  }
`;

export const StyleHome = styled.div`
  .green-content {
    /* margin: 0 -10px; */
    margin-top: 0;
    color: white;
    padding: 80px 0;
    width: min(100%, 1000px);
  }

  .track-record {
    width: min(95%, 1000px);
    margin: 0 auto;

    h1 {
      margin-bottom: 30px;
      font-size: 32px;
    }

    p {
      margin-bottom: -50px;
    }
  }
`;

export const StyledDeliveryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  padding-top: -100px;

  text-align: center;
  width: 100%;
  margin: 0 auto;

  & > * {
    flex: 1 0 min(100%, 300px);

    & > * {
      margin-bottom: 30px;
    }

    p {
      text-align: left;
    }
  }

  span {
    flex: 2 0 min(100%, 400px);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const StyledMakeTogether = styled.div`
  background-color: ${({ theme }) => theme.quaternary};
  color: ${({ theme }) => theme.primaryText};
  width: 100%;
  margin: 0 auto 0 auto;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  padding: 70px 30px;
  /* height: 420px; */
  flex-direction: column;
  height: 100%;

  h2 {
    margin-bottom: 20px;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
    padding: 157px 30px 157px 30px;
    text-align: center;
    h2 {
      padding: 0 20px;
    }
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
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(95%, 1000px);
  margin: 0 auto;

  button {
    margin-right: 20px;
    margin-bottom: 10px;
  }

  svg {
    max-width: 400px;
    flex: 1 0;
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
  }

  .hero-text {
    /* max-width: min(100%, 450px); */
    flex: 2 0 450px;

    & > * {
      margin-bottom: 20px;
      /* flex: 1 0; */
    }
  }

  h1 {
    font-size: 92px;

    ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
      font-size: 4rem;
    }
  }

  .link {
    cursor: pointer;
    font-weight: 500;
    color: #5851d0;

    &:hover {
      color: black;
      transition: 800ms;
    }
  }

  p {
    line-height: 1.6rem;
    font-weight: 300;
  }
`;

export const StyledTestTestimonialsWrapper = styled.div`
  display: flex;

  & > * {
    flex: 1 0 min(100%, 500px);
  }

  flex-wrap: wrap;
`;
