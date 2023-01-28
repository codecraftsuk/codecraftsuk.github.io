import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoundedButton from '../../components/RoundedButton';
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
            <p>At CodeCrafts, we value your feedback. Reach out to us with any questions, comments or concerns. We're here to make your experience better.</p>
            <RoundedButton
              onClick={() => (window.location.href = 'mailto:codecraftsenquiry@gmail.com')}
              bgColor="#5851D0"
            >
              Contact us
            </RoundedButton>

            <span className="info">
              <p>
              If the button isn't working, please email<a href="mailto:codecraftsenquiry@gmail.com"> codecraftsenquiry@gmail.com</a>
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

        <h2>CodeCrafts Privacy Policy</h2>
        <p>
          At CodeCrafts, we are committed to protecting your privacy and ensuring the security of any personal data we
          collect from you. This privacy policy explains how we collect, use, and protect your personal data when you
          visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal data such as your name, email address, and other contact information when you fill out
          a form on our website, sign up for a course or workshop, or otherwise provide us with your information. We may
          also collect information about your browsing behaviour when you visit our website, such as the pages you visit
          and the resources you access. This information is collected through the use of cookies and other tracking
          technologies.
        </p>

        <h2>Use of Your Information</h2>
        <p>
          We use the personal data we collect from you to provide you with the services and information you have
          requested, to improve our website and services, and to keep you informed about our latest offers and events.
          We may also use your personal data to send you marketing and promotional emails, unless you have requested not
          to receive such communications.
        </p>

        <h2>Protection of Your Information</h2>
        <p>
          We take the security of your personal data very seriously. We have implemented appropriate technical and
          organizational measures to protect your personal data against unauthorized or unlawful processing, and against
          accidental loss, destruction, or damage. However, please be aware that no method of transmitting or storing
          data over the internet is completely secure. While we strive to protect your personal data, we cannot
          guarantee the security of any information you transmit to us.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, and delete the personal data that we hold about you. You also have the
          right to object to the processing of your personal data for certain purposes, such as for direct marketing. To
          exercise any of these rights, please contact us at privacy@codecrafts.com.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes to our practices or legal requirements.
          Any changes will be posted on this page, so please check back periodically to stay informed about our privacy
          practices.
        </p>

        <h2>Terms of Use</h2>
        <p>
          By using this contact page and submitting your information, you agree to our terms of use. We reserve the
          right to not respond to any inquiry that violates our terms of use or is deemed inappropriate or offensive.
        </p>
      </div>
    </StyledContactWrapper>
  );
};

export default Contact;
