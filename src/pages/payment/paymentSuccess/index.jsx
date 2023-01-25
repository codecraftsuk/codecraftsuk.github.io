import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../../../assets/lottie/confetti.json';
import manWave from '../../../assets/images/happy-woman.svg';
import RoundedButton from '../../../components/RoundedButton';
import { StyledSuccessContent, StyledSuccessWrapper } from './styled';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMinYMi slice',
  },
};

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [isLottieFinished, setIsLottieFinished] = useState(false);

  const events = [
    {
      eventName: 'complete',
      callback: () => setIsLottieFinished(true),
    },
  ];
  return (
    <StyledSuccessWrapper>
      {!isLottieFinished && <Lottie options={defaultOptions} height={600} eventListeners={events} />}
      <StyledSuccessContent isSuccess isFinished={isLottieFinished}>
        <div>
          <h2>Payment Successful</h2>
          <div class="container">
            <ul class="timeline">
              <li className="active-tl">Plan Selected</li>
              <li className="active-tl">Payment</li>
              <li>Email</li>
            </ul>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laboriosam.</p>
          <RoundedButton bgColor="#5851D0" onClick={() => navigate('/')}>
            Home
          </RoundedButton>
        </div>
        <img src={manWave} alt="" />
      </StyledSuccessContent>
    </StyledSuccessWrapper>
  );
};

export default PaymentSuccess;
