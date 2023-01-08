import React from 'react';
import { StyledCardWrapper } from './styled';

const CourseCard = ({ image, name, description, handleInfo, weeks }) => (
  <StyledCardWrapper>
    <img src={image} alt="card-img" />
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </StyledCardWrapper>
);

export default CourseCard;
