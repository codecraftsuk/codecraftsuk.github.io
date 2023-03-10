import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const RoundedButton = ({ children, bgColor, onClick, textColor, circle, className, disabled }) => (
  <StyledButton
    className={className}
    onClick={onClick}
    bgColor={bgColor}
    textColor={textColor}
    isCircle={circle}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

export default RoundedButton;

RoundedButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  circle: PropTypes.bool,
  disabled: PropTypes.bool,
};

RoundedButton.defaultProps = {
  bgColor: '',
  className: '',
  textColor: 'white',
  circle: false,
  disabled: false,
};
