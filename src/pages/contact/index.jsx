import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledContactWrapper } from './styled';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <StyledContactWrapper>
      <div className="back">
        <ion-icon onClick={() => navigate(-1)} name="chevron-back-outline" />
        <h1>Contact</h1>
      </div>
    </StyledContactWrapper>
  );
};

export default Contact;
