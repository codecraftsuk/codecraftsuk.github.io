import React from 'react';
import {
  StyledCopyRight,
  StyledFooter,
  StyledFooterWrapper,
  StyledLink,
  StyledLinkWrapper,
  StyledSocials,
} from './styled';

const Footer = () => (
  <StyledFooter>
    <div className="full-width">
      <h1>
        <StyledLink onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>codecrafts</StyledLink>
      </h1>
    </div>
    <StyledFooterWrapper>
      <StyledLinkWrapper>
        <h3>Products</h3>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/courses">Courses</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/pricing">Pricing</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledLinkWrapper>

      <StyledLinkWrapper>
        <h3>Jobs Sites</h3>
        <StyledLink>LinkedIn</StyledLink>
        <StyledLink>TotalJobs</StyledLink>
        <StyledLink>reed</StyledLink>
        <StyledLink>indeed</StyledLink>
        <StyledLink>Job seekers allowance</StyledLink>
      </StyledLinkWrapper>

      <StyledLinkWrapper>
        <h3>Support</h3>
        <StyledLink>Contact</StyledLink>
        <StyledLink>FAQ</StyledLink>
        <StyledLink>Terms of Service</StyledLink>
        <StyledLink>Policies</StyledLink>
        <StyledLink>Example</StyledLink>
      </StyledLinkWrapper>
    </StyledFooterWrapper>
    <StyledSocials>
      <h3>Follow us on socials</h3>
      {/* <p>Stay up-to-date with our latest news and updates by following us on social media.</p> */}

      <span>
        <a href="https://twitter.com/codecrafts_">
          <ion-icon name="logo-twitter" />
        </a>
        <a href="https://discord.gg/Ks7UxrqBSF">
          <ion-icon name="logo-discord" />
        </a>
        <a href="https://instagram.com/codecrafts_">
          <ion-icon name="logo-instagram" />
        </a>
      </span>
    </StyledSocials>
    <StyledCopyRight>
      <h3 className="full-width">
        codecrafts &copy;
        {new Date().getFullYear()}. All Rights Reserved.
      </h3>
    </StyledCopyRight>
  </StyledFooter>
);

export default Footer;
