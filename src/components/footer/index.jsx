import React from 'react';
import {
  StyledCopyRight,
  StyledFooter,
  StyledFooterWrapper,
  StyledLink,
  StyledLinkWrapper,
  StyledSocials,
  StyledLogo2,
} from './styled';

const Footer = () => (
  <StyledFooter>
    <div className="full-width">
      <StyledLogo2 to="/">CodeCrafts.</StyledLogo2>
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
        <StyledLink><a onClick={() => (window.location.href = 'https://linkedin.com/jobs')}>LinkedIn</a></StyledLink>
        <StyledLink><a onClick={() => (window.location.href = "https://startup.jobs/")}>Startup Jobs</a></StyledLink>
        <StyledLink><a onClick={() => (window.location.href = "https://www.milkround.com/")}>Milkround</a></StyledLink>
        <StyledLink><a onClick={() => (window.location.href = "https://www.indeed.co.uk/")}>Indeed</a></StyledLink>
        <StyledLink><a onClick={() => (window.location.href = "https://relocate.me/")}>Relocate</a></StyledLink>
      </StyledLinkWrapper>


      <StyledLinkWrapper>
        <h3>Support</h3>
        <StyledLink to="/contact">Terms of Service</StyledLink>
      </StyledLinkWrapper>
    </StyledFooterWrapper>
    <StyledSocials>
      <h3>Follow us on socials</h3>
      {/* <p>Stay up-to-date with our latest news and updates by following us on social media.</p> */}

      <span>
        <a href="https://twitter.com/codecraftsuk">
          <ion-icon name="logo-twitter" />
        </a>
        <a href="https://discord.gg/Ks7UxrqBSF">
          <ion-icon name="logo-discord" />
        </a>
        <a href="https://instagram.com/codecraftsuk">
          <ion-icon name="logo-instagram" />
        </a>
        <a href="https://linkedin.com/company/codecraftsuk">
          <ion-icon name="logo-linkedin" />
        </a>
      </span>
    </StyledSocials>
    <StyledCopyRight>
      <h3 className="full-width">
        CodeCrafts. &copy;
        {new Date().getFullYear()}. All Rights Reserved.
      </h3>
    </StyledCopyRight>
  </StyledFooter>
);

export default Footer;
