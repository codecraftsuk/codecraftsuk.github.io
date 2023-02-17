import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import CourseCard from '../../components/CourseCard';
import './styles.css';
import { coursesData, faqData } from './messages';
import { StyledFullWidth } from '../../common/styles';
import Accordion from '../../components/Accordion';

const Courses = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title>Courses</title>
        <meta name="description" content="Learn from our amazing programming courses!" />
        <link rel="canonical" href="/#/courses" />
      </Helmet>
      <div className="courses-wrapper">
        <div className="back">
          <ion-icon onClick={() => navigate(-1)} name="chevron-back-outline" />
          <h2>Courses</h2>
        </div>

        <div className="course-cards">
          {coursesData.map((course) => (
            <CourseCard {...course} />
          ))}
        </div>

        <div className="curved-top" style={{ backgroundColor: theme?.mode === 'light' ? '#edf0f3' : '#454545' }} />
        <StyledFullWidth textColor bgColor={theme?.mode === 'light' ? '#edf0f3' : '#454545'}>
          <div style={{ color: theme?.primaryText, background: theme.primary }} className="faq-wrapper">
            {faqData.map((qa) => (
              <Accordion title={qa.question} text={qa.answer} />
            ))}
          </div>
        </StyledFullWidth>
      </div>
    </>
  );
};

export default Courses;
