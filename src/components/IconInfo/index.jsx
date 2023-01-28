import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './styled';
import CountUp from '../CountUp';

const IconInfo = ({ icon, title, text, bigTitle, alignLeft, countAnimate, inView, bullets }) => {
  return (
    <StyledWrapper alignLeft={alignLeft} bigTitle={!!bigTitle}>
      <ion-icon name={icon} />
      {countAnimate && inView ? <CountUp {...countAnimate} /> : bigTitle && <h1>{bigTitle}</h1>}
      <h3>{title}</h3>
      <p>{text}</p>
      {bullets && (
        <ul>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </StyledWrapper>
  );
};

export default React.memo(IconInfo);

IconInfo.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  bigTitle: PropTypes.string,
  alignLeft: PropTypes.bool,
  countAnimate: PropTypes.shape({}),
  bullets: PropTypes.shape([]),
};

IconInfo.defaultProps = {
  icon: 'add-outline',
  title: '',
  text: '',
  bigTitle: '',
  alignLeft: false,
  countAnimate: null,
  bullets: null,
};
