/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledText = styled.div`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid red; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 35.5s steps(155, end), blink 0.75s step-end infinite;
  max-width: 110px;
  font-weight: 700;

  color: black;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
