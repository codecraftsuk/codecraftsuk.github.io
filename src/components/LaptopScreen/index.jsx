import React, { useEffect, useState } from 'react';
import { StyledWrapper } from './styled';
import carbon from '../../assets/images/portfolio/carbon.gif';

const LaptopScreen = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <StyledWrapper>
      <div className="container">
        <div className="laptop">
          <div className="laptop__screen">
            <img
              src={carbon}
              width={width}
              height={height}
              alt="Screen"
            />
          </div>
          <div className="laptop__bottom">
            <div className="laptop__under" />
            <div className="laptop__shadow" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default LaptopScreen;
