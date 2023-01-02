/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

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

  h2 {
    position: absolute;
    top: 50px;
    color: white;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    text-align: center;

    p {
      font-size: 1.3rem;
      font-weight: 300;
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
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 1;
`;
