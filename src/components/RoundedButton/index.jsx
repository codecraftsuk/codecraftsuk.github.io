import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const RoundedButton = ({ children, bgColor, onClick, textColor }) => (
  <StyledButton onClick={onClick} bgColor={bgColor} textColor={textColor}>
    {children}
  </StyledButton>
);

export default RoundedButton;

RoundedButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

RoundedButton.defaultProps = {
  bgColor: '',
  textColor: 'white',
};
