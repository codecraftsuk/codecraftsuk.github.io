/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StyledNavWrapper, StyledLinkItem } from './styled';
import useWindowDimensions from '../../hooks/useWindowDimenions';
import TypingAnimation from '../TypingAnimation';
import RoundedButton from '../RoundedButton';
import Logo from '../../assets/images/logo/favicon.png';

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
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <TypingAnimation />
      </span>
      <span>
        <Link to="/courses">
          <RoundedButton active={location?.pathname === '/courses'} bgColor="#2F2E41">Courses</RoundedButton>
        </Link>
        <Link to="/cart">
          <RoundedButton active={location?.pathname === '/cart'} bgColor="#FB6169">Cart</RoundedButton>
        </Link>
      </span>
    </StyledNavWrapper>
  );
};

export default Navigation;
