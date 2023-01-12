import React, { useState } from 'react';
import './style.css';

const Accordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => setIsOpen((prev) => !prev);

  return (
    <div onClick={handleIconClick} className="accordion-wrapper">
      <button type="button" className="accordion">
        <h3>{title}</h3>
        {!isOpen ? <ion-icon name="chevron-down-outline" /> : <ion-icon name="chevron-up-outline" />}
      </button>
      <p className="accordion-text" style={{ ...(isOpen && { maxHeight: '150px', padding: '20px 10px' }) }}>
        {text}
      </p>
    </div>
  );
};
export default Accordion;
