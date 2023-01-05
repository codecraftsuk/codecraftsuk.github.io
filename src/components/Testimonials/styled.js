import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: min(100%, 1500px);
  background-color: #2F2E41;
  color: white;
  padding: 90px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  span {
    font-family: 'Passion One', cursive;
    font-size: 6rem;
    color: ${({ theme }) => theme.tertiary};
  }

  .slide {
    display: flex;
    transform: translateX(-200%);
    transition: transform 600ms linear;
  }
`;

export const StyledContent = styled.div`
  flex: 1 0 100%;
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }
`;
