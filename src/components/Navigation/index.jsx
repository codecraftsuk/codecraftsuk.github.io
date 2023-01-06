/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledNavWrapper } from './styled';
import TypingAnimation from '../TypingAnimation';
import RoundedButton from '../RoundedButton';
import Logo from '../../assets/images/logo/favicon.png';
import { useSet } from '../../store';

const Navigation = ({ isDarkTheme }) => {
  const set = useSet();

  const toggleTheme = () => set(({ isDarkTheme: stateTheme }) => ({ isDarkTheme: !stateTheme }));
  return (
    <StyledNavWrapper>
      <span className="text">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <TypingAnimation />
      </span>
      <span className="btns">
        <RoundedButton bgColor="#2F2E41">Courses</RoundedButton>
        <RoundedButton bgColor="#FB6169">Cart</RoundedButton>
        <RoundedButton onClick={toggleTheme} textColor={isDarkTheme ? '#fff' : '#000'} circle>
          {isDarkTheme ? <ion-icon name="sunny-outline" /> : <ion-icon name="moon-outline" />}
        </RoundedButton>
      </span>
    </StyledNavWrapper>
  );
};

export default Navigation;

Navigation.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};
