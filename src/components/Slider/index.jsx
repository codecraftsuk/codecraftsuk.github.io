import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledDot, StyledDotWrapper, StyledSliderWrapper } from './styled';
import backgroundImg from '../../assets/images/background/1.jpg';

const Slider = ({ sliderContent }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <StyledSliderWrapper>
      <img src={backgroundImg} alt="" />
      <h2>
        {sliderContent[slideIndex]?.title}
        <p>{sliderContent[slideIndex]?.text}</p>
      </h2>

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
