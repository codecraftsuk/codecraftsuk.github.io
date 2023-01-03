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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam magnam hic incidunt cumque maiores qui quis
            enim obcaecati minima tempore.
          </h3>
          <p>Zai</p>
        </StyledContent>
        <StyledContent>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam magnam hic incidunt cumque maiores qui quis
            enim obcaecati minima tempore.
          </h3>
          <p>kush</p>
        </StyledContent>
        <StyledContent>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam magnam hic incidunt cumque maiores qui quis
            enim obcaecati minima tempore.
          </h3>
          <p>abdul</p>
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
