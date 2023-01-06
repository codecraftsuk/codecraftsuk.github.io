import styled from 'styled-components';

export const StyledAboutWrapper = styled.div`
  width: min(100%, 1500px);
  margin: 0 auto;
  margin-top: 60px;

  text-align: center;

  svg {
    max-height: 300px;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 24px;
  }
`;

export const StyledAboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    padding: 0 20px;
    flex: 1 0;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('lg')} {
    flex-direction: column-reverse;
  }
  flex-wrap: wrap;
`;
