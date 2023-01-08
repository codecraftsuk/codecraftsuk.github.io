import React from 'react';
import CourseCard from '../../components/CourseCard';
import './styles.css';

import { coursesData, faqData } from './messages';
import { StyledFullWidth } from '../../common/styles';
import Accordion from '../../components/Accordion';

const Courses = () => (
  <div className="courses-wrapper">
    <h1 className="main-title">Courses</h1>
    <div className="course-cards">
      {coursesData.map((course) => (
        <CourseCard {...course} />
      ))}
    </div>

    <h1 className="main-title">FAQ's</h1>

    <StyledFullWidth bgColor="#b3b3d6">
      <div className="faq-wrapper">
        {faqData.map((qa) => (
          <Accordion {...qa} />
        ))}
      </div>
    </StyledFullWidth>
  </div>
);

export default Courses;
