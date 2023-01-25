import React from 'react';
import RoundedButton from '../RoundedButton';
import { StyledBulletPoint, StyledPriceCard } from './styled';

const PriceCard = ({ title, description, price, showStar, btnProps = {}, btnText = 'Buy', bulletPoints }) => {
  return (
    <StyledPriceCard>
      <div className="head">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <h2>£{price}</h2>

      {bulletPoints.map((point) => (
        <StyledBulletPoint isIncluded={point.isIncluded}>{point.text}</StyledBulletPoint>
      ))}

      <RoundedButton {...btnProps}>{btnText}</RoundedButton>
      {showStar && <ion-icon name="star-outline" />}
    </StyledPriceCard>
  );
};

export default PriceCard;
