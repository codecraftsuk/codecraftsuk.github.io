import React from 'react';
import { StyledFlexWrap, StyledFullWidth } from '../../common/styles';
import IconInfo from '../../components/IconInfo';
import RoundedButton from '../../components/RoundedButton';
import Slider from '../../components/Slider';
import { infoIconData, sliderContent, statsData } from './messages';
import {
  StyledContentWrapper,
  StyledInfoWrapper,
  StyleHome,
  StyledDeliveryInfo,
  StyledMakeTogether,
  StyledSlideShow,
  StyledSocials,
  StyledHomeHead,
} from './styled';
import deliveryImg from '../../assets/images/delivery.jpg';
import Testimonials from '../../components/Testimonials';
import womanWave from '../../assets/images/man-wave.svg';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/meeting.json';
import animationDataWelcome from '../../assets/lottie/coding-desk.json';

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
  return (
    <StyleHome>
      {/* <Slider sliderContent={sliderContent} /> */}

      <StyledHomeHead>
        <div className="hero-text">
          <h1>{sliderContent[0]?.title}</h1>
          <p>{sliderContent[0]?.text}</p>

          <div>
            <RoundedButton bgColor="#fb6169">Read More...</RoundedButton>
          </div>
        </div>
        {/* <img src={womanWave} alt="" /> */}
        <span>
          <Lottie options={animationDataWelcomeOp} height={350} />
        </span>
      </StyledHomeHead>
      <hr />

      <StyledContentWrapper>
        <StyledInfoWrapper>
          <h1>Creative Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, ex accusamus error, amet veniam
            quis, quidem ullam impedit obcaecati fuga! Ipsa esse eaque iure doloribus nulla distinctio dicta blanditiis?
          </p>
        </StyledInfoWrapper>

        <StyledFlexWrap>
          {infoIconData.map((iconData) => (
            <IconInfo {...iconData} />
          ))}
        </StyledFlexWrap>
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
          {/* <img src={deliveryImg} alt="man-on-computer-coding" /> */}
          <Lottie options={defaultOptions} height={500} />
        </StyledDeliveryInfo>

        <StyledInfoWrapper>
          <h1>Team Members</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, ex accusamus error, amet veniam
            quis, quidem ullam impedit obcaecati.
          </p>
          <StyledFlexWrap className="members">
            <span>
              <ion-icon name="person-circle-outline" />
              <h3>kush</h3>
              <p>Tutor / DevOps</p>
            </span>
            <span>
              <ion-icon name="person-circle-outline" />
              <h3>abdul</h3>
              <p>Tutor / DevOps</p>
            </span>
            <span>
              <ion-icon name="person-circle-outline" />
              <h3>zai</h3>
              <p>Tutor / FullStack</p>
            </span>
          </StyledFlexWrap>
        </StyledInfoWrapper>
      </StyledContentWrapper>

      <StyledFullWidth bgColor="#2f2e41">
        <Testimonials />
      </StyledFullWidth>

      <StyledFullWidth bgColor="#fb6169">
        <StyledMakeTogether>
          <h2>Let&apos;s Make Something Great Together.</h2>
          <RoundedButton bgColor="rgb(236,2f2e41236, 236)" textColor="black">
            Start a Course
          </RoundedButton>
        </StyledMakeTogether>
      </StyledFullWidth>

      <StyledSlideShow>
        <span>
          <ion-icon name="logo-nodejs" />
          <ion-icon name="logo-html5" />
          <ion-icon name="logo-css3" />
          <ion-icon name="logo-python" />
          <ion-icon name="cloudy-outline" />
        </span>
      </StyledSlideShow>

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
