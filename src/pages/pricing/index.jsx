/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PriceCard from '../../components/PriceCard';
import { StyledPriceCard, StyledPricingWrapper } from './styled';
import { basicPlanBullets, basicPlanModalInfo, proPlanBullets, proPlanModalInfo } from './messages';

import classRoomSvg from '../../assets/images/classroom.svg';

const Pricing = () => {
  const navigate = useNavigate();
  // let stripePromise;

  // const getStripe = async () => {
  //   if (!stripePromise) stripePromise = loadStripe(import.meta.env.VITE_PUB_KEY);
  //   return stripePromise;
  // };

  // const checkOutOptions = {
  //   lineItems: [
  //     {
  //       price: 'price_1MRmk7D1tdAAl7pg7MwjN6fE',
  //       quantity: 1,
  //     },
  //   ],
  //   mode: 'payment',
  //   successUrl: `${window.location.origin}/#/payment/on/success`,
  //   cancelUrl: `${window.location.origin}/#/payment/on/cancel`,
  // };

  // const redirectToCheckout = async () => {
  //   const stripe = await getStripe();
  //   // const { error } = await stripe.redirectToCheckout(checkOutOptions);
  //   // console.log('stripe error', error);
  //   await stripe.redirectToCheckout(checkOutOptions);
  // };

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
        <StyledPriceCard>
          <h3>BASIC</h3>
          <h5 className="price">139</h5>

          <p>or £46/m for 3 months</p>

          <p>Most Popular</p>

          <img src={classRoomSvg} alt="" />
          <span>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </span>
          <button type="button" onClick={() => navigate('/courses')}>
            Courses
          </button>
        </StyledPriceCard>

        <StyledPriceCard>
          <h3>PRO</h3>
          <h5 className="price">199</h5>
          <p>Coming Soon!</p>

          <span>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </span>
          <button className="dark">Buy Now</button>
        </StyledPriceCard>
        {/* <PriceCard
          btnText="Courses"
          showStar
          btnProps={{ textColor: '#d07151', onClick: () => navigate('/courses') }}
          title="Basic"
          price="139"
          monthlyPrice="or £49/m"
          description="Most Popular"
          modalInfo={basicPlanModalInfo}
          bulletPoints={basicPlanBullets}
        />
        <PriceCard
          btnProps={{ bgColor: '#5851D0', disabled: true }}
          title="Pro"
          price="149"
          description="Not Available"
          bulletPoints={proPlanBullets}
          modalInfo={proPlanModalInfo}
        /> */}
        {/* <PriceCard
          bulletPoints={enterprisePlanBullets}
          btnProps={{ textColor: '#d07151' }}
          title="Enterprise"
          price="299"
        /> */}
      </div>
    </StyledPricingWrapper>
  );
};

export default Pricing;
