/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledText = styled.div`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid ${({ theme }) => theme.tertiary};; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 5s steps(155, end) 1s infinite, erase 5s steps(155, end) 2s infinite, blink 0.75s step-end infinite;
  animation-direction: alternate;
  max-width: 225px;
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};

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

  @keyframes erase {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
  }
`;
