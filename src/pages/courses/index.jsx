import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import CourseCard from '../../components/CourseCard';
import './styles.css';

import { coursesData, faqData } from './messages';
import { StyledFullWidth } from '../../common/styles';
import Accordion from '../../components/Accordion';

const Courses = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <div className="courses-wrapper">
      {/* <h1 className="main-title">Courses</h1> */}
      <div className="back">
        <ion-icon onClick={() => navigate(-1)} name="chevron-back-outline" />
        <h1>Courses</h1>
      </div>
      <div className="course-cards">
        {coursesData.map((course) => (
          <CourseCard {...course} />
        ))}
      </div>

      <h1 className="main-title">FAQ's</h1>

      <div className="curved-top" style={{ backgroundColor: theme?.mode === 'light' ? '#edf0f3' : '#454545' }} />
      <StyledFullWidth textColor bgColor={theme?.mode === 'light' ? '#edf0f3' : '#454545'}>
        <div style={{ color: theme?.primaryText }} className="faq-wrapper">
          {faqData.map((qa) => (
            <Accordion title={qa.question} text={qa.answer} />
          ))}
        </div>
      </StyledFullWidth>
    </div>
  );
};

export default Courses;
