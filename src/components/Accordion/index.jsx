import React, { useState } from 'react';
import './style.css';

const Accordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => setIsOpen((prev) => !prev);

  return (
    <div className="accordion-wrapper">
      <button type="button" onClick={() => {}} className="accordion">
        <h3>{title}</h3>
        {!isOpen ? (
          <ion-icon onClick={handleIconClick} name="add-circle-outline" />
        ) : (
          <ion-icon onClick={handleIconClick} name="remove-circle-outline" />
        )}
      </button>
      <p
        className="accordion-text"
        style={{ backgroundColor: '#ceced161', ...(isOpen && { maxHeight: '150px', padding: '20px 10px' }) }}
      >
        {text}
      </p>
    </div>
  );
};
export default Accordion;
