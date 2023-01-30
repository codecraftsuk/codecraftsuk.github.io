import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoundedButton from '../../../components/RoundedButton';
import { StyledSuccessContent, StyledSuccessWrapper } from '../paymentSuccess/styled';
import cancelSvg from '../../../assets/images/woman-wave.svg';

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <StyledSuccessWrapper>
      <StyledSuccessContent isFinished={true}>
        <div>
          <h2>Payment cancelled 😔</h2>
          <div class="container">
            <ul class="timeline">
              <li className="active-tl">Plan Selected</li>
              <li>Payment</li>
              <li>Email</li>
            </ul>
          </div>
          <p>
            If you are having issues with making a payment, then please contact us on{' '}
            <strong>codecraftsenquiry@gmail.com</strong>
          </p>
          <span>
            <RoundedButton bgColor="#5851D0" onClick={() => navigate('/')}>
              Home
            </RoundedButton>
            <RoundedButton bgColor="#4156a8" onClick={() => navigate('/pricing')}>
              Try Again
            </RoundedButton>
          </span>
        </div>
        <img src={cancelSvg} alt="man-waving" className="cancel-img" />
      </StyledSuccessContent>
    </StyledSuccessWrapper>
  );
};

export default PaymentCancel;
