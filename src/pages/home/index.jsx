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
  StyledTitleWrapper,
} from './styled';
import animationData from '../../assets/lottie/meeting.json';
import animationDataWelcome from '../../assets/lottie/laptop.json';
import carbon from '../../assets/images/portfolio/carbon3.gif';

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
            <RoundedButton onClick={() => navigate('/courses')} bgColor="#2F2E41">
              Courses
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
          <p className="creative" >
            At CodeCrafts, we believe that anyone can learn to code and build a successful career in the tech industry.
            That's why we offer a comprehensive Web Development and DevOps bootcamp, designed to turn code newbies into
            skilled professionals. Our program is backed by a team of experienced instructors and a range of creative
            services to support you on your journey. Whether you're just starting out or looking to advance in your
            career, CodeCrafts has something for you. Keep reading to learn more about the services we offer.
          </p>
        </StyledInfoWrapper>

        <StyledFlexWrap>
          {infoIconData.map((iconData) => (
            <IconInfo {...iconData} />
          ))}
        </StyledFlexWrap>
      </StyledContentWrapper>
      <hr />


      <StyledInfoWrapper>
        <div className='gif-container'>
          <h1>Begin Your Coding Journey Today!</h1>
          <img src={carbon} className="carbon-img" alt="Screen" />
          {/* <LaptopScreen /> */}
        </div>
      </StyledInfoWrapper>


      <StyledFullWidth bgColor="#fb6169">
        <StyledFlexWrap className="green-content">
          {statsData.map((iconData) => (
            <IconInfo {...iconData} />
          ))}
        </StyledFlexWrap>
      </StyledFullWidth>

      <StyledTitleWrapper>
        <h1 className="company-title">
          Building the Future of Tech: Our Bootcamp Helps Companies Find and Train Top Candidates
        </h1>
      </StyledTitleWrapper>
      <StyledContentWrapper>
        <StyledDeliveryInfo>
          <span>
            <p>
              CodeCrafts is committed to helping companies build the strong, talented teams they need to succeed in the
              tech industry. Our Web Development and DevOps bootcamp offers a unique solution for finding and training
              top candidates. Through a combination of hands-on training, practical experience, and comprehensive
              curriculum, we help individuals develop the skills and knowledge they need to thrive in the tech industry.
              If you're a tech company looking to build a strong team and secure a bright future, consider partnering
              with CodeCrafts and our bootcamp program.
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
          <p>Stay up-to-date with our latest news and updates by following us on social media.</p>

          <span>
            <a href="https://twitter.com/codecrafts_">
              <ion-icon name="logo-twitter" />
            </a>
            <a href="https://discord.gg/Ks7UxrqBSF">
              <ion-icon name="logo-discord" />
            </a>
            <a href="https://instagram.com/codecrafts_">
              <ion-icon name="logo-instagram" />
            </a>
          </span>
        </StyledSocials>
      </StyledFullWidth>
    </StyleHome>
  );
}
export default Home;
