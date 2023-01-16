import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './styled';

const IconInfo = ({ icon, title, text, bigTitle, alignLeft }) => (
  <StyledWrapper alignLeft={alignLeft} bigTitle={!!bigTitle}>
    <ion-icon name={icon} />
    {bigTitle && <h1>{bigTitle}</h1>}
    <h3>{title}</h3>
    <p>{text}</p>
  </StyledWrapper>
);

export default IconInfo;

IconInfo.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  bigTitle: PropTypes.string,
  alignLeft: PropTypes.bool,
};

IconInfo.defaultProps = {
  icon: 'add-outline',
  title: '',
  text: '',
  bigTitle: '',
  alignLeft: false,
};
