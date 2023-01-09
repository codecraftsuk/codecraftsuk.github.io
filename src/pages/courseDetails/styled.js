/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledCourseDetails = styled.div`
  width: min(100%, 1300px);
  margin: 0 auto;
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

  hr {
    width: 100%;
    margin-top: 10px;
  }

  .course-section-1 {
    position: relative;
    flex: 1 0 300px;
    width: min(100%, 300px);

    ion-icon {
      position: absolute;
      font-size: 2rem;
      top: -45px;
      left: 20px;
      cursor: pointer;
      color: red;
    }

    img {
      width: 100%;
    }

    h2 {
      margin-bottom: 20px;
    }
  }

  .course-section-2 {
    flex: 2 0 300px;
    height: fit-content;
    padding: 0 10px;

    .learning-text {
      margin-top: 30px;
    }

    .long-description {
      margin-bottom: 20px;
    }
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
