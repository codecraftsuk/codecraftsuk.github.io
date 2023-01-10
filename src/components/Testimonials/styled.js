import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%; /* Set the width to 50% of the total width of the screen */
  background-color: ${({ theme }) => theme.quinary};
  color: ${({ theme }) => theme.primaryText};
  padding: 90px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  float: left;
  position: relative;
  overflow: hidden;
  margin: 0 0 0 auto;
  height: 420px;

  span {
    font-family: 'Passion One', cursive;
    font-size: 6rem;
    color: ${({ theme }) => theme.primaryText};
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
    font-weight: normal;
  }
`;
