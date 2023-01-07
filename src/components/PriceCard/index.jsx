/* eslint-disable arrow-body-style */
import React from 'react';
import RoundedButton from '../RoundedButton';
import { StyledPriceCard } from './styled';

const PriceCard = ({ title, description, price, showStar }) => {
  return (
    <StyledPriceCard>
      <div className="head">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <h2>£{price}</h2>
      <h4>10 users included</h4>
      <h4>10 users included</h4>
      <h4>10 users included</h4>
      <h4>10 users included</h4>

      <RoundedButton bgColor="#fb6169">Buy</RoundedButton>
      {showStar && <ion-icon name="star-outline" />}
    </StyledPriceCard>
  );
};

export default PriceCard;
