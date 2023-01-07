/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import { StyledFlexWrap, StyledFullWidth } from '../../common/styles';
import IconInfo from '../../components/IconInfo';
import RoundedButton from '../../components/RoundedButton';
import Testimonials from '../../components/Testimonials';
import { infoIconData, sliderContent, statsData } from './messages';
import {
  StyledContentWrapper,
  StyledInfoWrapper,
  StyleHome,
  StyledDeliveryInfo,
  StyledMakeTogether,
  StyledSocials,
  StyledHomeHead,
  StyledTestTestimonialsWrapper,
} from './styled';
import LaptopScreen from '../../components/LaptopScreen';
import animationData from '../../assets/lottie/meeting.json';
import animationDataWelcome from '../../assets/lottie/laptop.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMinYMi slice',
  },
};

const animationDataWelcomeOp = {
  loop: true,
  autoplay: true,
  animationData: animationDataWelcome,
  rendererSettings: {
    preserveAspectRatio: 'xMinYMi slice',
  },
};

function Home() {
  const navigate = useNavigate();

  return (
    <StyleHome>
      <StyledHomeHead>
        <div className="hero-text">
          <h1>{sliderContent[0]?.title}</h1>
          <p>{sliderContent[0]?.text}</p>

          <div>
            <RoundedButton onClick={() => navigate('/about')} bgColor="#fb6169">
              Read More...
            </RoundedButton>
          </div>
        </div>
        <span>
          <Lottie options={animationDataWelcomeOp} height={350} />
        </span>
      </StyledHomeHead>
      <hr />

      <StyledContentWrapper>
        <StyledInfoWrapper>
          <h1>Creative Services</h1>
          <p>
            At CodeCrafts, we believe that anyone can learn to code and build a successful career in the tech industry. That's why we offer a comprehensive Web Development and DevOps bootcamp, designed to turn code newbies into skilled professionals. Our program is backed by a team of experienced instructors and a range of creative services to support you on your journey. Whether you're just starting out or looking to advance in your career, CodeCrafts has something for you. Keep reading to learn more about the services we offer.
          </p>
        </StyledInfoWrapper>

        <StyledFlexWrap>
          {infoIconData.map((iconData) => (
            <IconInfo {...iconData} />
          ))}
        </StyledFlexWrap>
      </StyledContentWrapper>
      <hr />

      <StyledContentWrapper>
        <StyledInfoWrapper>
          <h1>Begin Your Coding Journey Today!</h1>
          <LaptopScreen />
        </StyledInfoWrapper>
      </StyledContentWrapper>

      <StyledFullWidth bgColor="#fb6169">
        <StyledFlexWrap className="green-content">
          {statsData.map((iconData) => (
            <IconInfo {...iconData} />
          ))}
        </StyledFlexWrap>
      </StyledFullWidth>

      <StyledContentWrapper>
        <StyledDeliveryInfo>
          <span>
            <h1>We Helping Business Delivered.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravi,
              nulla nunc varius lectus, nec rutrum justo nibh eu lectus metus ultrices.
            </p>
            <RoundedButton bgColor="#fb6169">Read More</RoundedButton>
          </span>
          <Lottie options={defaultOptions} height={500} />
        </StyledDeliveryInfo>
      </StyledContentWrapper>

      <StyledTestTestimonialsWrapper>
        <StyledFullWidth bgColor="red">
          <Testimonials />
        </StyledFullWidth>

        <StyledFullWidth>
          <StyledMakeTogether>
            <h2>Let&apos;s Make Something Great Together.</h2>
            <RoundedButton bgColor="#FB6169" textColor="black">
              Start a Course
            </RoundedButton>
          </StyledMakeTogether>
        </StyledFullWidth>
      </StyledTestTestimonialsWrapper>

      <StyledFullWidth bgColor="#2f2e41">
        <StyledSocials>
          <h2>Follow Us On Socials</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, possimus?</p>

          <span>
            <ion-icon name="logo-twitter" />
            <ion-icon name="logo-discord" />
            <ion-icon name="logo-instagram" />
          </span>
        </StyledSocials>
      </StyledFullWidth>
    </StyleHome>
  );
}
export default Home;
