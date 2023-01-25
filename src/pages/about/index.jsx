import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Lottie from 'react-lottie';
import { StyledAboutContent, StyledAboutWrapper } from './styled';
import animationData from '../../assets/lottie/welcome.json';
import TeamMember from '../../components/TeamMember';
import { StyledFullWidth } from '../../common/styles';

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
  const theme = useTheme();
  return (
    <>
      <StyledAboutWrapper>
        <div className="back">
          <ion-icon onClick={() => navigate('/')} name="chevron-back-outline" />
          <h2>About Us</h2>
        </div>

        <StyledAboutContent>
          <p>
            Welcome to our web development and devops bootcamp, where we turn code newbies into skilled professionals in
            just a few short weeks. Our program is designed to take you from zero to hero, with a focus on hands-on
            experience and real-world projects. So why wait? Join our bootcamp and become a hero in web development and
            devops today!
          </p>
          <Lottie options={defaultOptions} height={300} />
        </StyledAboutContent>
      </StyledAboutWrapper>
      <StyledFullWidth bgColor={theme?.secondary}>
        <StyledAboutWrapper>
          <h2>Building the Future of Tech!</h2>
          <p className="building-tech-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore possimus necessitatibus et
            exercitationem, blanditiis ab, saepe ullam aut corrupti ex non soluta iusto architecto, excepturi vel
            expedita molestiae maiores optio placeat quasi! Adipisci quo inventore obcaecati quaerat beatae molestiae
            officia nisi soluta sequi eaque!
          </p>
          <p className="building-tech-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore possimus necessitatibus et
            exercitationem, blanditiis ab, saepe ullam aut corrupti ex non soluta iusto architecto, excepturi vel
            expedita molestiae maiores optio placeat quasi! Adipisci quo inventore obcaecati quaerat beatae molestiae
            officia nisi soluta sequi eaque!
          </p>
        </StyledAboutWrapper>
      </StyledFullWidth>

      <StyledAboutWrapper>
        <h2>Meet our team!</h2>
        <div className="meet-team">
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </div>
      </StyledAboutWrapper>
    </>
  );
};

export default About;
