import React, { useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import RoundedButton from '../RoundedButton';
import { StyledBulletPoint, StyledPriceCard } from './styled';
import Modal from '../Modal';

const PriceCard = ({
  title,
  description,
  price,
  showStar,
  btnProps = {},
  btnText = 'Buy',
  bulletPoints,
  modalInfo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => {
      if (prev === true) {
        document.body.style.overflow = 'unset';
        return false;
      }
      document.body.style.overflow = 'hidden';
      return true;
    });
  };
  return (
    <>
      <StyledPriceCard>
        <div className="head">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <h2>£{price}</h2>

        {bulletPoints.map((point) => (
          <StyledBulletPoint isIncluded={point.isIncluded}>{point.text}</StyledBulletPoint>
        ))}

        <RoundedButton {...btnProps}>{btnText}</RoundedButton>
        <RoundedButton onClick={toggleModal} bgColor="#5851D0">
          Read more
        </RoundedButton>

        {showStar && <ion-icon name="star-outline" />}
      </StyledPriceCard>
      <Modal isOpen={isOpen} handleClose={toggleModal}>
        <span className="pricing-modal">
          <h1 className="modal-heading">{title}</h1>
          <p>{modalInfo?.description}</p>
          <h4>Benefits</h4>
          <ul>
            {modalInfo?.bullets.map((b) => (
              <li>{b}</li>
            ))}
          </ul>
        </span>
      </Modal>
    </>
  );
};

export default PriceCard;

PriceCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  showStar: PropTypes.bool,
  btnProps: PropTypes.shape({}),
  modalInfo: PropTypes.shape({
    description: PropTypes.string,
    bullets: arrayOf(PropTypes.string),
  }),
  btnText: PropTypes.string,
  bulletPoints: PropTypes.arrayOf(PropTypes.string),
};
PriceCard.defaultProps = {
  title: '',
  description: '',
  price: '',
  showStar: false,
  btnProps: null,
  btnText: 'Buy',
  bulletPoints: null,
  modalInfo: {
    description: '',
    bullets: [],
  },
};
