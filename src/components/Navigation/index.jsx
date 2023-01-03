/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledNavWrapper, StyledLinkItem } from './styled';
import logo from '../../assets/images/logo/codecrafts-logo.svg';
import useWindowDimensions from '../../hooks/useWindowDimenions';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsOpen(false);
  }, [location?.pathname]);

  return (
    <StyledNavWrapper>
      <img src={logo} alt="logo-img" />
      <div style={{ transform: width > 768 ? 'translateX(0px)' : isOpen ? 'translateX(0px)' : 'translateX(-110%)' }}>
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
      {isOpen ? (
        <ion-icon onClick={() => setIsOpen((prev) => !prev)} name="close-outline" />
      ) : (
        <ion-icon onClick={() => setIsOpen((prev) => !prev)} name="menu-outline" />
      )}
    </StyledNavWrapper>
  );
};

export default Navigation;
