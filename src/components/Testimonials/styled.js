import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.quinary};
  /* color: ${({ theme }) => theme.secondaryText}; */
  color: white;
  padding: 70px 0 90px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  float: left;
  position: relative;
  overflow: hidden;
  margin: 0 0 0 auto;
  /* height: 420px; */

  background: linear-gradient(-45deg, rgba(89, 52, 208, 1) 0%, rgba(91, 60, 76, 1) 100%, #5400c8 100%);
  background-size: 400% 400%;
  animation: gradient 2s ease infinite;

  span {
    font-family: 'Passion One', cursive;
    font-size: 4rem;
    color: ${({ theme }) => theme.secondaryText};
  }

  .slide {
    display: flex;
    transform: translateX(-200%);
    transition: transform 600ms linear;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const StyledContent = styled.div`
  flex: 1 0 100%;
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-weight: normal;
    width: min(95%, 800px);
    margin: 0 auto;
  }

  p {
    color: orange !important;
  }
`;
