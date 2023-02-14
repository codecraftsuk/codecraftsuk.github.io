import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { StyledTickText } from '../../common/styles';

const Accordion = ({ title, text, bullets }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => setIsOpen((prev) => !prev);

  return (
    <div onClick={handleIconClick} className="accordion-wrapper">
      <span type="button" className="accordion">
        <h3 style={{ color: isOpen ? '#FF5F2F' : 'inherit' }}>{title}</h3>
        <ion-icon style={{ rotate: isOpen ? '180deg' : '0deg' }} name="chevron-down-outline" />
      </span>
      <div
        className="accordion-text"
        style={{
          ...(isOpen && {
            maxHeight: `${bullets?.length ? `${bullets.length * 100}px` : '200px'}`,
            padding: '0px 10px 10px 10px',
          }),
        }}
      >
        {text}
        {bullets && bullets.map((b) => <StyledTickText>{b}</StyledTickText>)}
      </div>
    </div>
  );
};
export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
};
Accordion.defaultProps = {
  title: '',
  text: '',
  bullets: null,
};
