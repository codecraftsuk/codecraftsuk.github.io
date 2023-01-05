/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledNavWrapper, StyledLinkItem } from './styled';
import logo from '../../assets/images/logo/codecrafts.png';
import useWindowDimensions from '../../hooks/useWindowDimenions';
import TypingAnimation from '../TypingAnimation';
import RoundedButton from '../RoundedButton';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsOpen(false);
  }, [location?.pathname]);

  return (
    <StyledNavWrapper>
      <span className="text">
        <TypingAnimation />
      </span>
      <span>
        <RoundedButton bgColor="#2F2E41">Courses</RoundedButton>
        <RoundedButton bgColor="#FB6169">Cart</RoundedButton>
      </span>
    </StyledNavWrapper>
  );
};

export default Navigation;
