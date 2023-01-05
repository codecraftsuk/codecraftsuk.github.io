import React, { useState } from 'react';
import CourseCard from '../../components/CourseCard';
import Modal from '../../components/Modal';
import './styles.css';

import { coursesData, faqData } from './messages';
import { StyledFullWidth } from '../../common/styles';
import Accordion from '../../components/Accordion';

const Courses = () => {
  const [modalCourseData, setModalCourseData] = useState(null);

  const handleInfo = (courseInfo) => setModalCourseData(courseInfo);
  return (
    <div className="courses-wrapper">
      <h1 className="main-title">Courses</h1>
      <div className="course-cards">
        {coursesData.map((course) => (
          <CourseCard handleInfo={handleInfo} {...course} />
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

      <Modal isOpen={!!modalCourseData} handleClose={() => setModalCourseData(null)}>
        <section>
          {modalCourseData?.map((week) => (
            <span className="week">{week}</span>
          ))}
        </section>
      </Modal>
    </div>
  );
};

export default Courses;
