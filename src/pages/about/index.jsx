import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Lottie from 'react-lottie';
import { StyledAboutContent, StyledAboutWrapper } from './styled';
import animationData from '../../assets/lottie/welcome.json';
import TeamMember from '../../components/TeamMember';
import { StyledFullWidth } from '../../common/styles';
import { teamMembers } from './messages';

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
            experience and real-world projects. We understand that learning to code can be daunting, which is why we
            focus on hands-on experience and real-world projects to make the learning process as smooth and effective as
            possible.
          </p>
          <Lottie options={defaultOptions} height={300} />
        </StyledAboutContent>
      </StyledAboutWrapper>
      <StyledFullWidth shouldBend bgColor={theme?.secondary}>
        <StyledAboutWrapper mt="0" py="10">
          <h2>Building the Future of Tech!</h2>
          <p className="building-tech-text">
            At our bootcamp, we are dedicated to "Building the Future of Tech." We believe that technology is the key to
            shaping the future and that the ability to create and develop cutting-edge software and systems is an
            essential skill for anyone looking to make a positive impact on the world. Our program is tailored to
            provide students with the knowledge and skills needed to succeed in today's tech-driven economy.
          </p>
          <p className="building-tech-text">
            Our team of expert instructors is passionate about technology and are dedicated to helping our students
            reach their full potential. They are committed to providing a flexible and supportive learning environment,
            and offer a variety of resources and support to ensure that each student has the best chance of success.
          </p>
          <p>
            So if you're looking to build the future of tech, look no further. Join our bootcamp today and become a hero
            in web development and devops!
          </p>
        </StyledAboutWrapper>
      </StyledFullWidth>

      <StyledAboutWrapper>
        <h2>Meet our team!</h2>
        <div className="meet-team">
          {teamMembers.map((mem) => (
            <TeamMember {...mem} />
          ))}
        </div>
      </StyledAboutWrapper>
    </>
  );
};

export default About;
