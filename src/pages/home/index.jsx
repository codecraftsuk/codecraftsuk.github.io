import React from 'react';
import { StyledFlexWrap } from '../../common/styles';
import IconInfo from '../../components/IconInfo';
import RoundedButton from '../../components/RoundedButton';
import Slider from '../../components/Slider';
import { infoIconData, sliderContent, statsData } from './messages';
import { StyledContentWrapper, StyledInfoWrapper, StyleHome, StyledDeliveryInfo } from './styled';
import deliveryImg from '../../assets/images/delivery.jpg';
import Testimonials from '../../components/Testimonials';

function Home() {
  return (
    <StyleHome>
      <Slider sliderContent={sliderContent} />

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
      <StyledFlexWrap className="green-content" bgColor="#00c874">
        {statsData.map((iconData) => (
          <IconInfo {...iconData} />
        ))}
      </StyledFlexWrap>

      <StyledContentWrapper>
        <StyledDeliveryInfo>
          <span>
            <h1>We Helping Business Delivered.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravi,
              nulla nunc varius lectus, nec rutrum justo nibh eu lectus metus ultrices.
            </p>
            <RoundedButton bgColor="#00c874">Read More</RoundedButton>
          </span>
          <img src={deliveryImg} alt="man-on-computer-coding" />
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

      <Testimonials />
    </StyleHome>
  );
}
export default Home;
