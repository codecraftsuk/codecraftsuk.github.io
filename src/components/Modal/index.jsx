import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { StyledModalWrapper } from './styled';

function Portal({ children, wrapperId = 'modal-root' }) {
  return createPortal(children, document.getElementById(wrapperId));
}

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <Portal>
      <StyledModalWrapper isOpen={isOpen}>
        <div>
          <ion-icon onClick={handleClose} name="close-circle-outline" />
          {children}
        </div>
      </StyledModalWrapper>
    </Portal>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
