/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledText = styled.div`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid ${({ theme }) => theme.tertiary}; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: -0.1px; /* Adjust as needed */
  animation: typing 3s steps(155, end) 3s infinite, erase 3s steps(155, end) 3s infinite, blink 0.3s step-end infinite;
  animation-direction: alternate;
  font-size: 20.8px;
  font-weight: bold;
  /* padding-left: 10px; */
  text-decoration: none;
  color: ${({ theme }) => theme.primaryPrimary} !important;

  ${({ theme: { breakPoints } }) => breakPoints.down('xs')} {
    /* display: none; */
    font-size: 12px;
  }

  @keyframes typing {
    0% {
      width: 0;
    }
    5% {
      width: 5%;
    }
    10% {
      width: 10%;
    }
    15% {
      width: 15%;
    }
    20% {
      width: 20%;
    }
    25% {
      width: 25%;
    }
    30% {
      width: 30%;
    }
    35% {
      width: 35%;
    }
    40% {
      width: 40%;
    }
    45% {
      width: 45%;
    }
    50% {
      width: 50%;
    }
    55% {
      width: 55%;
    }
    60% {
      width: 60%;
    }
    65% {
      width: 65%;
    }
    70% {
      width: 70%;
    }
    75% {
      width: 75%;
    }
    80% {
      width: 80%;
    }
    85% {
      width: 85%;
    }
    90% {
      width: 90%;
    }
    95% {
      width: 95%;
    }
    100% {
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
