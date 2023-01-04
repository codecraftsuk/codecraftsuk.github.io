import React, { useState } from 'react';
import './style.css';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => setIsOpen((prev) => !prev);

  return (
    <div className="accordion-wrapper">
      <button type="button" onClick={() => {}} className="accordion">
        <h3>{question}</h3>
        {!isOpen ? (
          <ion-icon onClick={handleIconClick} name="add-circle-outline" />
        ) : (
          <ion-icon onClick={handleIconClick} name="remove-circle-outline" />
        )}
      </button>
      <p className="accordion-text" style={{ maxHeight: isOpen ? '150px' : '0px' }}>
        {answer}
      </p>
    </div>
  );
};
export default Accordion;
