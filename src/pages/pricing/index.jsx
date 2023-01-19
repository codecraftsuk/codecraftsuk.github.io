/* eslint-disable max-len */
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import PriceCard from '../../components/PriceCard';
import { StyledPricingWrapper } from './styled';

const Pricing = () => {
  const navigate = useNavigate();
  let stripePromise;

  const getStripe = async () => {
    if (!stripePromise) stripePromise = loadStripe(import.meta.env.VITE_PUB_KEY);
    return stripePromise;
  };

  const checkOutOptions = {
    lineItems: [
      {
        price: 'price_1MRmk7D1tdAAl7pg7MwjN6fE',
        quantity: 1,
      },
    ],
    mode: 'payment',
    successUrl: `${window.location.origin}/#/payment/on/success`,
    cancelUrl: `${window.location.origin}/#/payment/on/cancel`,
  };

  const redirectToCheckout = async () => {
    const stripe = await getStripe();
    // const { error } = await stripe.redirectToCheckout(checkOutOptions);
    // console.log('stripe error', error);
    await stripe.redirectToCheckout(checkOutOptions);
  };

  return (
    <StyledPricingWrapper>
      <div className="back">
        <ion-icon onClick={() => navigate('/')} name="chevron-back-outline" />
        <h2>Pricing</h2>
      </div>

      <p className="text-content">
        At CodeCrafts, we believe that high-quality education should be accessible to everyone. That's why we offer
        flexible pricing options to meet the needs of our students. Whether you're paying out of pocket or using
        financing, we have a solution that will work for you. Our team is dedicated to helping you afford the education
        you need to succeed, so don't hesitate to reach out and ask about our pricing options. We can't wait to see you
        succeed at CodeCrafts!
      </p>

      <div className="price-cards">
        <PriceCard btnProps={{ textColor: '#5851D0', onClick: redirectToCheckout }} title="Basic" price="49" />
        <PriceCard btnProps={{ bgColor: '#5851D0' }} showStar title="Pro" price="149" description="Most Popular" />
        <PriceCard btnProps={{ textColor: '#5851D0' }} title="Enterprise" price="299" />
      </div>
    </StyledPricingWrapper>
  );
};

export default Pricing;
