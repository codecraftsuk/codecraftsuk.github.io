import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import { coursesData } from '../courses/messages';
import { StyledCourseDetails, StyledLabel, StyledLearnText } from './styled';

const CourseDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = useMemo(() => coursesData.find((c) => c.id === +params.courseId), [params]);

  return (
    <StyledCourseDetails>
      <div className="course-section-1">
        <ion-icon className="back" name="chevron-back-outline" onClick={() => navigate(-1)} />
        <img src={course?.image} alt="" />
        <StyledLabel>Course</StyledLabel>
        <h2>{course?.name}</h2>

        <h2>{course?.description}</h2>

        <StyledLabel>Hours Long</StyledLabel>
        <h2>2000 (change me)</h2>

        <StyledLabel>Duration</StyledLabel>
        <h2>{course?.weeks?.length}</h2>

        <StyledLabel>Requirements</StyledLabel>
        <h2>A Mac or Windows Computer</h2>

        <StyledLabel>Language</StyledLabel>
        <h2>English</h2>

        <StyledLabel>Access Point</StyledLabel>
        <h2>Access on mobile, computer and TV</h2>
      </div>

      <div className="course-section-2">
        <StyledLabel>Description</StyledLabel>
        <p className="long-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, facilis! Tempore, tenetur officiis
          quisquam, explicabo iusto nisi accusantium perferendis dolore aspernatur qui voluptatum exercitationem minima
          aliquid ratione ab aliquam libero obcaecati id. Esse tempore assumenda similique molestias recusandae nemo
          veniam? At reiciendis nisi fugit quidem iure itaque voluptatibus voluptate, a fugiat, dolorem voluptates
          architecto repellat? Molestias cumque sed provident iste porro soluta, deleniti non nostrum quisquam
          consectetur alias ratione, mollitia laudantium nulla placeat. Dolorum in laudantium at fugiat nobis magni odio
          explicabo ullam, soluta ad eius perferendis esse autem quaerat cupiditate laborum magnam. Reprehenderit
          reiciendis iste labore illo dicta officia.
        </p>

        <StyledLabel>Course Context</StyledLabel>
        {course?.weeks?.map((week) => (
          <>
            <Accordion
              title={week}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?"
            />
            <hr />
          </>
        ))}

        <div className="learning-text">
          <StyledLabel>What you'll learn</StyledLabel>
          {course?.learn?.map((l) => (
            <StyledLearnText>{l}</StyledLearnText>
          ))}
        </div>
      </div>
    </StyledCourseDetails>
  );
};

export default CourseDetails;
