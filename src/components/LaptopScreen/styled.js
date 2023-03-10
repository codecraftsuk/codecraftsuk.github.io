/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    padding: 80px;
    background: #6a84ed;
  }

  .laptop {
    position: relative;
    margin: auto;
    max-width: 92%;

    .laptop__screen {
      position: relative;
      z-index: 1;
      padding: 3%;
      border-radius: 2rem;
      background: #333;
      background-image: linear-gradient(to bottom, #333, #111);
      box-shadow: 0 0.1rem 0 #cfcfcf;
      border: 2px solid #333;
      width: 90%;
      height: 100%;

      margin: 0 auto;

      img {
        display: block;
        max-width: 100%;
        height: auto;
        aspect-ratio: attr(width) / attr(height);
        background: #000;
        width: 100%;
        height: 100%;
        border-radius: 0.5%;
      }
    }

    .laptop__bottom {
      position: relative;
      z-index: 1;
      margin-right: -7%;
      margin-left: -7%;
      height: 0.8rem;
      background: #e9eff5;
      background-image: linear-gradient(to bottom, #000, #111);
      border-radius: 0.2rem 0.2rem 0 0;
      margin: 0 auto;

      width: 92%;

      &::before {
        display: block;
        margin: 0 auto;
        width: 20%;
        height: 0.7rem;
        border-radius: 0 0 0.2rem 0.2rem;
        background: #f6f9fc;
        background-image: linear-gradient(to right, #555 0%, #333 10%, #333 90%, #555 100%);

        content: ' ';
      }
    }

    .laptop__under {
      position: absolute;
      top: 100%;
      left: 25%;
      display: block;
      width: 50%;
      height: 0.8rem;
      background: #e2e8f0;
      background-image: linear-gradient(to bottom, #333, #111);

      &::after,
      &::before {
        position: absolute;
        top: 0%;
        right: 100%;
        bottom: 0;
        display: block;
        width: 50%;
        border-bottom-left-radius: 100%;
        background: inherit;
        content: ' ';
      }

      &::after {
        right: auto;
        left: 100%;
        border-bottom-right-radius: 100%;
        border-bottom-left-radius: 0;
      }
    }

    .laptop__shadow {
      position: absolute;
      right: -10%;
      bottom: -1.8rem;
      left: -10%;
      z-index: 0;
      height: 2rem;
      background: radial-gradient(ellipse closest-side, #000, transparent);
      opacity: 0.5;
    }
  }
`;
