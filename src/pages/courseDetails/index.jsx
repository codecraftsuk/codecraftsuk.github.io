import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import IconText from '../../components/IconText';
import RoundedButton from '../../components/RoundedButton';
import { coursesData } from '../courses/messages';
import {
  StyledBuyWrapper,
  StyledCourseDetails,
  StyledCourseDetailsWrapper,
  StyledLabel,
  StyledLearnText,
} from './styled';

const CourseDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = useMemo(() => coursesData.find((c) => c.id === +params.courseId), [params]);

  return (
    <StyledCourseDetailsWrapper>
      <StyledCourseDetails>
        <ion-icon className="back" name="chevron-back-outline" onClick={() => navigate(-1)} />
        <div className="course-section-1">
          <div className="content">
            {/* <StyledLabel>Course</StyledLabel> */}
            <h2>{course?.name}</h2>

            <h2>{course?.description}</h2>
          </div>

          <div className="course-info">
            <IconText name="save-outline">Last Updated 09/01/2022</IconText>
            <IconText name="language-outline">English</IconText>
            <IconText name="code-slash-outline">Coding Exercises</IconText>
            <IconText name="laptop-outline">Access on Mobile, TV, PC</IconText>
            <IconText name="git-pull-request-outline">MAC/Windows Machine & IDE</IconText>
          </div>
        </div>

        <div className="course-section-2">
          <StyledLabel>Description</StyledLabel>
          <p className="long-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, facilis! Tempore, tenetur officiis
            quisquam, explicabo iusto nisi accusantium perferendis dolore aspernatur qui voluptatum exercitationem
            minima aliquid ratione ab aliquam libero obcaecati id. Esse tempore assumenda similique molestias recusandae
            nemo veniam? At reiciendis nisi fugit quidem iure itaque voluptatibus voluptate, a fugiat, dolorem
            voluptates architecto repellat? Molestias cumque sed provident iste porro soluta, deleniti non nostrum
            quisquam consectetur alias ratione, mollitia laudantium nulla placeat. Dolorum in laudantium at fugiat nobis
            magni odio explicabo ullam, soluta ad eius perferendis esse autem quaerat cupiditate laborum magnam.
            Reprehenderit reiciendis iste labore illo dicta officia.
          </p>

          <div className="weeks">
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
          </div>

          <StyledLabel>What you'll learn</StyledLabel>
          <div className="learning-text">
            {course?.learn?.map((l) => (
              <StyledLearnText>{l}</StyledLearnText>
            ))}
          </div>
        </div>
      </StyledCourseDetails>

      <StyledBuyWrapper>
        <img src={course?.image} alt="" />
        <h2>Subscribe to our amazing courses</h2>
        <RoundedButton bgColor="#FB6169">Buy Now</RoundedButton>
      </StyledBuyWrapper>
    </StyledCourseDetailsWrapper>
  );
};

export default CourseDetails;
