/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { StyledDot, StyledDotWrapper } from '../Slider/styled';
import { StyledContent, StyledWrapper } from './styled';

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === 2) return setSlideIndex(0);
    setSlideIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const timeout = setTimeout(nextSlide, 7000);

    return () => clearTimeout(timeout);
  });

  return (
    <StyledWrapper>
      <h1>Testimonials</h1>
      <span>&#8221;</span>
      <div className="slide" style={{ transform: `translate(-${slideIndex}00%)` }}>
        <StyledContent>
          <h3>
            CodeCrafts helped me build the skills I needed to succeed in tech. The team, curriculum, and training were top-notch. Highly recommend!
          </h3>
          <p>Andrew</p>
        </StyledContent>
        <StyledContent>
          <h3>
            CodeCrafts bootcamp program was the perfect solution for finding and training top candidates for our tech team. We'll definitely be partnering with them again in the future.
          </h3>
          <p>tajara+</p>
        </StyledContent>
        <StyledContent>
          <h3>
            CodeCrafts is the best tech bootcamp I've been through. The instructors are knowledgeable and the curriculum is practical. I highly recommend it.
          </h3>
          <p>Adeel</p>
        </StyledContent>
      </div>
      <StyledDotWrapper bottom="30px">
        <StyledDot onClick={() => setSlideIndex(0)} active={slideIndex === 0} />
        <StyledDot onClick={() => setSlideIndex(1)} active={slideIndex === 1} />
        <StyledDot onClick={() => setSlideIndex(2)} active={slideIndex === 2} />
      </StyledDotWrapper>
    </StyledWrapper>
  );
};

export default Testimonials;
