import React from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import RoundedButton from '../../components/RoundedButton';
import { termsConditions } from './messages';
import { StyledContactCard, StyledContactWrapper } from './styled';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <StyledContactWrapper>
      <div className="back">
        <ion-icon onClick={() => navigate(-1)} name="chevron-back-outline" />
        <h2>Contact Us</h2>
      </div>
      <div class="container">
        <div className="cards-wrapper">
          <StyledContactCard className="contact-card" bgColor="#5851D0">
            <p>
              At CodeCrafts, we value your feedback. Reach out to us with any questions, comments or concerns. We're
              here to make your experience better.
            </p>
            <RoundedButton
              onClick={() => (window.location.href = 'mailto:codecraftsenquiry@gmail.com')}
              bgColor="#5851D0"
            >
              Contact us
            </RoundedButton>

            <span className="info">
              <p>
                If the button isn't working, please email
                <a href="mailto:codecraftsenquiry@gmail.com"> codecraftsenquiry@gmail.com</a>
              </p>
            </span>
          </StyledContactCard>

          <StyledContactCard className="contact-card">
            <p>Get in touch with us through our social media channels.</p>
            <p>
              - Follow us on <a href="https://twitter.com/codecrafts_">Twitter</a>
            </p>
            <p>
              - Follow us on <a href="https://instagram.com/codecrafts_">Instagram</a>
            </p>
            <p>
              - Connect with us on <a href="https://linkedin.com/codecraftuk">LinkedIn</a>
            </p>
            <p>
              - Join our community on <a href="https://discord.gg/Ks7UxrqBSF">Discord</a>
            </p>
          </StyledContactCard>
        </div>

        <div className="terms-conditions">
          {termsConditions.map((tc) => (
            <Accordion {...tc} />
          ))}
        </div>
      </div>
    </StyledContactWrapper>
  );
};

export default Contact;
