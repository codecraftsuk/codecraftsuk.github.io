/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

const comeIn = keyframes`
  from {
    top: 700px;
    opacity: 0;
  }
  to {
    opacity: 50px;
    opacity: 1;
  }
`;

export const StyledSliderWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    height: 97vh;
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    left: 0;
    opacity: 0.6;
  }

  .abs-div {
    position: absolute;
    top: 50px;
    color: white;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    text-align: center;
    animation: ${comeIn} 1000ms linear;

    p {
      font-size: 1.3rem;
      font-weight: 300;
    }

    div {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

export const StyledDot = styled.div`
  background-color: ${({ active }) => (active ? 'white' : 'gray')};
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledDotWrapper = styled.div`
  position: absolute;
  bottom: ${({ bottom }) => bottom || '100px'};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 1;
`;
