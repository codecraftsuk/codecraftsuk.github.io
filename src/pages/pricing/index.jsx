import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledPricingWrapper } from './styled';

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <StyledPricingWrapper>
      <div className="back">
        <ion-icon onClick={() => navigate('/')} name="chevron-back-outline" />
        <h1>Pricing</h1>
      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At facere autem obcaecati nostrum! Minus ex nihil
        excepturi magnam minima quod repellendus atque eveniet eligendi? Doloribus voluptas blanditiis sapiente totam.
        Facilis unde iste vel fugit reprehenderit dolores perferendis excepturi maiores nobis!
      </p>
    </StyledPricingWrapper>
  );
};

export default Pricing;
