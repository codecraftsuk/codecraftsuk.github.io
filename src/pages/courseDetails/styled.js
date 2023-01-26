/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledCourseDetailsWrapper = styled.div`
  width: min(95%, 1000px);
  margin: 0 auto;
  display: flex;
  margin-top: 40px;
  position: relative;
  justify-content: space-between;
  gap: 20px;

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
    flex-wrap: wrap-reverse;
  }
`;

export const StyledCourseDetails = styled.div`
  width: min(100%, 1300px);
  margin-top: 40px;
  hr {
    width: 100%;
    margin-top: 10px;
  }

  & > ion-icon {
    font-size: 2.2rem;
    color: red;
    cursor: pointer;
    position: absolute;
    top: -10px;
    margin-left: -15px;
  }

  .course-section-1 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    .content {
      flex: 2 0 350px;
    }

    .course-info {
      /* margin-top: 10px; */
      flex: 1 0 300px;
    }
  }

  h2 {
    margin-bottom: 20px;
  }

  .course-section-2 {
    flex: 2 0 300px;
    height: fit-content;
    /* padding: 0 10px; */

    .learning-text {
      display: flex;
      flex-wrap: wrap;

      p {
        width: min(300px, 100%);
        font-size: 14px;
      }
    }

    .long-description {
      margin-bottom: 20px;
    }
  }

  .weeks {
    margin-bottom: 20px;
  }
`;

export const StyledLabel = styled.p`
  border-bottom: 1px solid gray;
`;

export const StyledLearnText = styled.p`
  font-weight: 500;
  margin: 10px 10px;

  &:before {
    content: '✓';
    margin-right: 10px;
  }
`;

export const StyledBuyWrapper = styled.div`
  margin-top: 40px;
  top: 20px;

  ${({ theme: { breakPoints } }) => breakPoints.up('md')} {
    position: flex;
    align-self: flex-start;
    width: 50%;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }

  h2,
  button {
    margin: 10px;
  }

  .course-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 10px;
  }

  .pricing {
    display: flex;
  }
`;
