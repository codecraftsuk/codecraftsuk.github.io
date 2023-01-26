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
        <div className="course-section-2">
          <StyledLabel>Description</StyledLabel>
          <p className="long-description">
          This bootcamp course is designed to provide students with the knowledge and skills needed to become a professional web developer. The course covers a wide range of topics such as HTML/CSS, JavaScript, React, Python, and Django. Students will work on real-world projects and exercises to gain hands-on experience. 
          </p>
          <p>
          By the end of the course, students will be able to build complete web applications and have a strong understanding of the web development process. Suitable for beginners and experienced developers looking to expand their skills.
          </p>

          <div className="weeks">
            <StyledLabel>Course Context</StyledLabel>
            {course?.weeks?.map((week) => (
              <>
                <Accordion
                  title={week}
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus adipisci, distinctio ullam porro aut ab. Architecto autem vero facilis?"
                />
              </>
            ))}
          </div>
        </div>
      </StyledCourseDetails>

      <StyledBuyWrapper>
        <img src={course?.image} alt="" />
        <h2>Web Development</h2>
        <RoundedButton bgColor="#5851D0">Buy Now</RoundedButton>
        <div className="course-info">
          <IconText name="save-outline">Last Updated 09/01/2022</IconText>
          <IconText name="language-outline">English</IconText>
          <IconText name="code-slash-outline">Coding Exercises</IconText>
          <IconText name="laptop-outline">Access on Mobile, TV, PC</IconText>
          <IconText name="git-pull-request-outline">MAC/Windows Machine & IDE</IconText>
        </div>
      </StyledBuyWrapper>
    </StyledCourseDetailsWrapper>
  );
};

export default CourseDetails;
