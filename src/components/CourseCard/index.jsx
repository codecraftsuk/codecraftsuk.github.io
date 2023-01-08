import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCardWrapper } from './styled';

const CourseCard = ({ image, name, description, weeks, id }) => {
  const navigate = useNavigate();
  return (
    <StyledCardWrapper onClick={() => navigate(`/courses/${id}`)}>
      <img src={image} alt="card-img" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </StyledCardWrapper>
  );
};

export default CourseCard;
