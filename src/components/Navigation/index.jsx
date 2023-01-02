import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledNavWrapper, StyledLinkItem } from './styled';
import logo from '../../assets/images/logo/codecrafts.png';

const Navigation = () => {
  const location = useLocation();

  return (
    <StyledNavWrapper>
      <div>
        <img src={logo} alt="" style={{ width: '10%' }}/>
        <StyledLinkItem active={location?.pathname === '/'} to="/">
          Home
        </StyledLinkItem>
        <StyledLinkItem active={location?.pathname === '/courses'} to="courses">
          Courses
        </StyledLinkItem>
        <StyledLinkItem active={location?.pathname === '/about'} to="about">
          About Us
        </StyledLinkItem>
        <StyledLinkItem active={location?.pathname === '/jobs'} to="jobs">
          Jobs
        </StyledLinkItem>
        <StyledLinkItem active={location?.pathname === '/contact'} to="contact">
          Contact
        </StyledLinkItem>
      </div>
    </StyledNavWrapper>
  );
};

export default Navigation;
