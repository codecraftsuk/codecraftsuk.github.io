import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const RoundedButton = ({ children, bgColor, onClick }) => (
  <StyledButton onClick={onClick} bgColor={bgColor}>
    {children}
  </StyledButton>
);

export default RoundedButton;

RoundedButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  bgColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

RoundedButton.defaultProps = {
  bgColor: '',
};
