import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { StyledDot, StyledDotWrapper, StyledSliderWrapper } from './styled';
import backgroundImg from '../../assets/images/background/1.jpg';
import RoundedButton from '../RoundedButton';

const Slider = ({ sliderContent }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();
  return (
    <StyledSliderWrapper>
      <img src={backgroundImg} alt="" />
      <div className="abs-div">
        <h2>{sliderContent[slideIndex]?.title}</h2>
        <p>{sliderContent[slideIndex]?.text}</p>

        <div>
          <RoundedButton onClick={() => navigate('/courses')}>Courses</RoundedButton>
          <RoundedButton onClick={() => navigate('/contact')} bgColor="#00c874">
            Contact
          </RoundedButton>
        </div>
      </div>

      <StyledDotWrapper>
        {sliderContent.map((_, index) => (
          <StyledDot onClick={() => setSlideIndex(index)} active={index === slideIndex} />
        ))}
      </StyledDotWrapper>
    </StyledSliderWrapper>
  );
};

export default Slider;

Slider.propTypes = {
  sliderContent: PropTypes.shape([]).isRequired,
};
