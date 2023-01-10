import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCardWrapper } from './styled';

const CourseCard = ({ image, name, description, weeks, id, isComingSoon }) => {
  const navigate = useNavigate();
  return (
    <StyledCardWrapper onClick={() => navigate(`/courses/${id}`)}>
      {isComingSoon && <div className="coming-soon">Coming soon</div>}
      <img src={image} alt="card-img" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </StyledCardWrapper>
  );
};

export default CourseCard;
