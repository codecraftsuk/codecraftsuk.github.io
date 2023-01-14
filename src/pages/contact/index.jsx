import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledContactWrapper } from './styled';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <StyledContactWrapper>
      <div className="back">
        <ion-icon onClick={() => navigate(-1)} name="chevron-back-outline" />
        <h1>Contact Us</h1>
      </div>
      <div class="container">
        <p>
          At codecrafts, we value your feedback and are always happy to hear from our customers. If you have any
          questions, comments, or concerns, please don't hesitate to reach out to us.
        </p>

        <h2>Get in Touch</h2>
        <p>
          - Email us at <a href="mailto:codecrafts@gmail.com">codecrafts@gmail.com</a>
        </p>

        <h2>Social Media</h2>
        <p>
          - Follow us on <a href="https://twitter.com/codecrafts_">Twitter</a>
        </p>
        <p>
          - Follow us on <a href="https://instagram.com/codecrafts_">Instagram</a>
        </p>
        <p>
          - Connect with us on <a href="https://linkedin.com/codecrafts">LinkedIn</a>
        </p>
        <p>
          - Join our community on <a href="https://discord.gg/Ks7UxrqBSF">Discord</a>
        </p>

        <h2>Privacy Policy</h2>
        <p>
          At codecrafts, we take your privacy seriously. We will only use the information you provide to us via email to
          respond to your inquiry. We will not share or sell your information to any third party. By using this form,
          you agree to our privacy policy.
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
