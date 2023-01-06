/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledNavWrapper, StyledLinkItem } from './styled';
import TypingAnimation from '../TypingAnimation';
import RoundedButton from '../RoundedButton';
import Logo from '../../assets/images/logo/favicon.png';

const Navigation = () => {
  const isDark = false;

  return (
    <StyledNavWrapper>
      <span className="text">
        <img className="logo" src={Logo} alt="" />
        <TypingAnimation />
      </span>
      <span>
        <RoundedButton bgColor="#2F2E41">Courses</RoundedButton>
        <RoundedButton bgColor="#FB6169">Cart</RoundedButton>
        <RoundedButton circle bgColor={isDark ? '#e1e1e2' : '#312f2f'}>
          {isDark ? <ion-icon name="sunny-outline" /> : <ion-icon name="moon-outline" />}
        </RoundedButton>
      </span>
    </StyledNavWrapper>
  );
};

export default Navigation;
