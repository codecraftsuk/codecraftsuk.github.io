import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './styled';

const IconInfo = ({ icon, title, text }) => (
  <StyledWrapper>
    <ion-icon name={icon} />
    <h3>{title}</h3>
    <p>{text}</p>
  </StyledWrapper>
);

export default IconInfo;

IconInfo.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

IconInfo.defaultProps = {
  icon: 'add-outline',
  title: '',
  text: '',
};
