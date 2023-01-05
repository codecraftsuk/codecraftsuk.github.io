/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledText = styled.div`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid red; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 7.5s steps(9, end) infinite, blink 0.65s step-end infinite;
  max-width: 115px;
  font-weight: 700;
  letter-spacing: 1.5px;

  color: black;
  @keyframes typing {
    0% {
      width: 0;
    }
    60% {
      width: 100%;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
