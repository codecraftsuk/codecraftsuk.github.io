/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledFlexWrap, StyledFullWidth } from '../../common/styles';
import IconInfo from '../../components/IconInfo';
import RoundedButton from '../../components/RoundedButton';
import Testimonials from '../../components/Testimonials';
import { infoIconData, sliderContent, statsData, whyCodeCraftInfo } from './messages';
import {
  StyledContentWrapper,
  StyledInfoWrapper,
  StyleHome,
  StyledDeliveryInfo,
  StyledHomeHead,
  StyledTestTestimonialsWrapper,
  StyledTitleWrapper,
  StyledLanguagesWrapper,
} from './styled';
import animationData from '../../assets/lottie/charts.json';
import animationDataWelcome from '../../assets/lottie/laptop.json';
import FadeInWhenVisible from '../../components/FadeInWhenVisible';
import { useInView } from 'react-intersection-observer';
import useWindowDimensions from '../../hooks/useWindowDimenions';

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

function Home({ setHeroHeight }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [shouldTextCount, setShouldTextCount] = useState(false);
  const boxRef = useRef();

  // This function calculate X and Y
  const getPosition = () => {
    const x = boxRef.current.offsetTop;
    setHeroHeight(x);
  };
  useEffect(() => {
    if (inView === true) setShouldTextCount(inView);
  }, [inView]);

  useEffect(() => {
    getPosition();

    window.addEventListener('resize', getPosition);
    () => window.removeEventListener('resize', getPosition);
  }, []);

  return (
    <StyleHome>
      <StyledHomeHead>
        <div className="hero-text">
          <h1>{sliderContent[0]?.title}</h1>
          <p>{sliderContent[0]?.text}</p>
          <div>
            <RoundedButton onClick={() => navigate('/about')} bgColor="#303a6e">
              Read More
            </RoundedButton>
            <span onClick={() => navigate('/courses')} className="link">
              Courses
            </span>
          </div>
        </div>
        <span>
          <Lottie options={animationDataWelcomeOp} height={400} />
        </span>
      </StyledHomeHead>

      <StyledContentWrapper>
        <div ref={boxRef} />

        <StyledInfoWrapper>
          <br></br>
          <br></br>
          <br></br>
          <h1>Services</h1>
          <p className="creative">
            At CodeCrafts, we believe that anyone can learn to code and build a successful career in the tech industry.
            That's why we offer a comprehensive Web Development and DevOps bootcamp, designed to turn code newbies into
            skilled professionals.
          </p>
          <p className="creative">
            Our program is backed by a team of experienced instructors and a range of creative services to support you
            on your journey. Whether you're just starting out or looking to advance in your career, CodeCrafts has
            something for you. Keep reading to learn more about the services we offer.
          </p>
        </StyledInfoWrapper>

        <FadeInWhenVisible>
          <StyledFlexWrap px="16">
            {infoIconData.map((iconData) => (
              <IconInfo {...iconData} />
            ))}
          </StyledFlexWrap>
        </FadeInWhenVisible>
      </StyledContentWrapper>

      {/* <FadeInWhenVisible>
        <StyledFullWidth bgColor={theme?.secondary}>
          <StyledInfoWrapper>
            <div className="gif-container">
              <div class="laptop-bg">
                <div class="laptop-content-bg"></div>
                <img src={laptop} className="laptop" alt="Screen" />
              </div>
            </div>
          </StyledInfoWrapper>
        </StyledFullWidth>
      </FadeInWhenVisible> */}

      <FadeInWhenVisible>
        <StyledFullWidth shouldBend bgColor="#5851D0">
          <div className="track-record">
            <h1>Track Record</h1>
            <p>
              Looking for a top-notch web development bootcamp? Our program boasts a high success rate and satisfied
              clients, giving you the skills and knowledge you need to excel in your career. Join us and make impressive
              progress towards your goals!
            </p>
          </div>
          <div ref={ref} />
          <StyledFlexWrap className="green-content">
            {statsData.map((iconData) => (
              <IconInfo {...iconData} inView={shouldTextCount} />
            ))}
          </StyledFlexWrap>
        </StyledFullWidth>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <StyledContentWrapper pt={30}>
          <StyledDeliveryInfo>
            <span>
              <StyledTitleWrapper>
                <h1 className="company-title">Our Purpose</h1>
              </StyledTitleWrapper>
              <p>
                CodeCrafts is committed to helping companies build the strong, talented teams they need to succeed in
                the tech industry. Our Web Development and DevOps bootcamp offers a unique solution for finding and
                training top candidates. Through a combination of hands-on training, practical experience, and
                comprehensive curriculum, we help individuals develop the skills and knowledge they need to thrive in
                the tech industry. If you're a tech company looking to build a strong team and secure a bright future,
                consider partnering with CodeCrafts and our bootcamp program.
              </p>
              <RoundedButton onClick={() => navigate('/contact')} bgColor="#5851d0">
                Contact Us
              </RoundedButton>
            </span>
            <Lottie options={defaultOptions} height={450} />
          </StyledDeliveryInfo>
        </StyledContentWrapper>
        <br></br>
      </FadeInWhenVisible>

      <StyledFullWidth bgColor={theme?.secondary}>
        <StyledContentWrapper>
          <FadeInWhenVisible>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="why-us-title">Why CodeCrafts?</h1>
            <StyledFlexWrap px="10" py="0">
              {whyCodeCraftInfo.map((iconData) => (
                <IconInfo alignLeft {...iconData} />
              ))}
            </StyledFlexWrap>
            <br></br>
            <br></br>
            <br></br>
          </FadeInWhenVisible>
        </StyledContentWrapper>
      </StyledFullWidth>

      <FadeInWhenVisible>
        <StyledTestTestimonialsWrapper>
          <StyledFullWidth bgColor="red">
            <Testimonials />
          </StyledFullWidth>
        </StyledTestTestimonialsWrapper>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <br></br>
        <br></br>
        <br></br>
        <StyledContentWrapper pt={30}>
          <StyledLanguagesWrapper>
            <ion-icon name="logo-javascript"></ion-icon>
            <ion-icon name="logo-css3"></ion-icon>
            <ion-icon name="logo-html5"></ion-icon>
            <ion-icon name="logo-python"></ion-icon>
            <ion-icon name="logo-nodejs"></ion-icon>
            <ion-icon name="cloud-upload-outline"></ion-icon>
            <ion-icon name="logo-react"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-docker"></ion-icon>
            <ion-icon name="logo-electron"></ion-icon>
          </StyledLanguagesWrapper>
        </StyledContentWrapper>
        <br></br>
        <br></br>
        <br></br>
      </FadeInWhenVisible>
    </StyleHome>
  );
}
export default Home;
