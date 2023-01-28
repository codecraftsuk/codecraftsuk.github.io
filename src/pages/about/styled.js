import styled from 'styled-components';

export const StyledAboutWrapper = styled.div`
  width: min(95%, 1000px);
  margin: 0 auto;
  margin-top: 50px;
  padding: 50px 0;

  svg {
    max-height: 300px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    text-align: left;

    ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
      font-size: 16px;
    }
  }

  .back {
    text-align: left;
    /* margin-left: 20px; */
    font-size: 2.8rem;

    display: flex;
    align-items: center;

    ion-icon {
      cursor: pointer;
      margin-right: 30px;
      margin-left: -15px;
    }
  }

  hr {
    margin: 35px auto;
    width: 100px;
  }

  .building-tech-text {
    margin-top: 30px;
  }

  .meet-team {
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    position: relative;
    z-index: 1;

    span {
      width: min(95%, 200px);
    }

    h3 {
    }
    img {
      width: 90%;
    }
  }

  /* .meet-team */
`;

export const StyledAboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > * {
    /* padding: 0 20px; */
    flex: 1 0;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('lg')} {
    flex-direction: column-reverse;
  }
  flex-wrap: wrap;
`;
