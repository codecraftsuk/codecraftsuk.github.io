import React from 'react';
import styled from 'styled-components';

const StyledIconText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  ion-icon {
    font-size: 1.4rem;
  }
`;

const IconText = ({ name, className, children }) => (
  <StyledIconText>
    <ion-icon className={className} name={name} />
    <h4>{children}</h4>
  </StyledIconText>
);

export default IconText;
