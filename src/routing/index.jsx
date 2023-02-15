/* eslint-disable arrow-body-style */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import CourseDetails from '../pages/courseDetails';
import Courses from '../pages/courses';
import Home from '../pages/home';
import Jobs from '../pages/jobs';
import NotFound from '../pages/notFound';
import PaymentCancel from '../pages/payment/paymentCancel';
import PaymentSuccess from '../pages/payment/paymentSuccess';
import Pricing from '../pages/pricing';

const Router = ({ setHeroHeight }) => {
  return (
    <Routes>
      <Route path="/" element={<Home setHeroHeight={setHeroHeight} />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="courses/:courseId" element={<CourseDetails />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />

      {/* payment routes */}
      <Route path="/payment/on/success" element={<PaymentSuccess />} />
      <Route path="/payment/on/cancel" element={<PaymentCancel />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
