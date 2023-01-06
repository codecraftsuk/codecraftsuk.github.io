import styled from 'styled-components';

export const StyledAboutWrapper = styled.div`
  width: min(100%, 1500px);
  margin: 0 auto;
  margin-top: 50px;

  text-align: center;
  padding-bottom: 100px;

  svg {
    max-height: 300px;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 24px;
    text-align: left;

    ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
      font-size: 20px;
    }
  }

  .back {
    text-align: left;
    margin-left: 20px;
    font-size: 2.8rem;

    display: flex;
    align-items: center;

    ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
      justify-content: center;
    }

    ion-icon {
      cursor: pointer;
      margin-right: 30px;
      color: red;
    }
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
