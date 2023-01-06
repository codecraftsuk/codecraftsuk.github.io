import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import notfound from '../../assets/images/404.svg';

const StyledNotFoundWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 80vh;
  position: relative;
  flex-direction: column;

  img {
    width: min(90%, 50%);
    margin: 0 auto;
    margin-bottom: 20px;
    flex: 1 0;
  }

  span {
    position: absolute;
    left: 60px;
    top: 20px;
    font-size: 1.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    ion-icon {
      color: red;
      font-size: 3rem;
    }

    ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
      left: 20px;
    }
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <StyledNotFoundWrapper>
      <span>
        <ion-icon name="chevron-back-outline" onClick={() => navigate('/')} />
      </span>
      <img src={notfound} alt="" />
      <h3>page not found :(</h3>
    </StyledNotFoundWrapper>
  );
};

export default NotFound;
