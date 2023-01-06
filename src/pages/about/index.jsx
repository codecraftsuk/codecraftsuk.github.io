import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import { StyledAboutContent, StyledAboutWrapper } from './styled';
import animationData from '../../assets/lottie/welcome.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMinYMi slice',
  },
};

const About = () => {
  const navigate = useNavigate();
  return (
    <StyledAboutWrapper>
      <div className="back">
        <ion-icon onClick={() => navigate('/')} name="chevron-back-outline" />
        <h1>About Us</h1>
      </div>

      <StyledAboutContent>
        <p>
          Build Your Own Future!, text: Welcome to our web development and devops bootcamp, where we turn code newbies
          into skilled professionals in just a few short weeks. Our program is designed to take you from zero to hero,
          with a focus on hands-on experience and real-world projects. So why wait? Join our bootcamp and become a hero
          in web development and devops today!
        </p>
        <Lottie options={defaultOptions} height={300} />
      </StyledAboutContent>
    </StyledAboutWrapper>
  );
};

export default About;
