import React, { useState } from 'react';

import './style.css';

const Accordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => setIsOpen((prev) => !prev);

  return (
    <div onClick={handleIconClick} className="accordion-wrapper">
      <span type="button" className="accordion">
        <h3 style={{ color: isOpen ? '#FF5F2F' : 'inherit' }}>{title}</h3>
        <ion-icon style={{ rotate: isOpen ? '180deg' : '0deg' }} name="chevron-down-outline" />
      </span>
      <p className="accordion-text" style={{ ...(isOpen && { maxHeight: '150px', padding: '20px 10px' }) }}>
        {text}
      </p>
    </div>
  );
};
export default Accordion;
