import React from 'react';
import RoundedButton from '../RoundedButton';
import { StyledCardWrapper } from './styled';

const CourseCard = ({ image, name, description, handleInfo, weeks }) => (
  <StyledCardWrapper>
    <img src={image} alt="card-img" />
    <span>
      <h2>{name}</h2>
      <p>{description}</p>

      <div className="btns">
        <RoundedButton onClick={() => handleInfo(weeks)} textColor="black" bgColor="#9AD4D6">
          <ion-icon name="help-circle-outline" />
        </RoundedButton>
        <RoundedButton textColor="white" bgColor="#AA6373">
          <ion-icon name="cart-outline" />
        </RoundedButton>
      </div>
    </span>
  </StyledCardWrapper>
);

export default CourseCard;
