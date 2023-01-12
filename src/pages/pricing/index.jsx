/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PriceCard from '../../components/PriceCard';
import { StyledPricingWrapper } from './styled';

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <StyledPricingWrapper>
      <div className="back">
        <ion-icon onClick={() => navigate('/')} name="chevron-back-outline" />
        <h1>Pricing</h1>
      </div>

      <p className="text-content">
        At CodeCrafts, we believe that high-quality education should be accessible to everyone. That's why we offer
        flexible pricing options to meet the needs of our students. Whether you're paying out of pocket or using
        financing, we have a solution that will work for you. Our team is dedicated to helping you afford the education
        you need to succeed, so don't hesitate to reach out and ask about our pricing options. We can't wait to see you
        succeed at CodeCrafts!
      </p>

      <div className="price-cards">
        <PriceCard btnProps={{ textColor: '#FB6169' }} title="Basic" price="49" />
        <PriceCard btnProps={{ bgColor: '#FB6169' }} showStar title="Pro" price="149" description="Most Popular" />
        <PriceCard btnProps={{ textColor: '#FB6169' }} title="Enterprise" price="299" />
      </div>
    </StyledPricingWrapper>
  );
};

export default Pricing;
