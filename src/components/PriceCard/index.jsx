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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, provident nam laborum hic voluptatem sint
          cumque? Sequi, a commodi. Impedit ut quo voluptate ratione nemo cumque sequi vero temporibus non, eum, ab
          dolor ipsam quod rem officiis exercitationem, a asperiores debitis quis deserunt mollitia voluptatem. Eum
          inventore aut enim. Assumenda non doloremque repudiandae, autem quidem ipsam magnam laborum eos facere iure
          cumque culpa. Sapiente minima vel perspiciatis ipsum dicta amet quibusdam impedit aliquid, voluptatibus
          corrupti possimus veritatis praesentium. Ut fugit corporis commodi quia animi cumque vero vitae consequuntur,
          doloremque ab, reprehenderit perferendis reiciendis a recusandae, laborum eius at repellendus cum ratione.
          Libero quis aperiam facere. Autem atque minima tempore enim dolore a beatae, mollitia molestiae hic
          dignissimos iste blanditiis ipsam corrupti aperiam fuga odit error eveniet sequi ratione laboriosam veritatis!
          Distinctio quidem maxime enim dolores numquam exercitationem inventore, assumenda harum hic officia ipsa
          voluptates aperiam aliquid, illum animi quam corporis earum repellat, aliquam accusantium sapiente nulla id
          delectus. Labore nulla distinctio neque deleniti asperiores ducimus, repellat odio quia? Dolore facere officia
          maxime officiis cumque, accusantium omnis repellendus natus, esse nostrum quod odit corrupti voluptatum
          obcaecati consequatur quidem incidunt aperiam amet cum eius deleniti voluptas? Recusandae totam ipsam facere
          perferendis est?
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
