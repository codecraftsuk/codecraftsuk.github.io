import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #030506;
  padding: 20px 0;
  align-items: center;

  img {
    height: 40px;
    margin-left: 40px;
  }

  div {
    width: min(100%, 1420px);
    display: flex;
    justify-content: space-around;
    transform: translateX(0px);
    transition: transform 400ms ease-out;

    ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
      height: 100vh;
      background-color: white;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 5px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      padding-top: 80px;
      width: min(100%, 500px);
      box-shadow: 5px 0px 40px gray;
    }
  }

  ion-icon {
    color: white;
    font-size: 2.4rem;
    cursor: pointer;
  }

  ion-icon[name='close-outline'] {
    color: red;
    z-index: 15;
  }

  ${({ theme: { breakPoints } }) => breakPoints.up('md')} {
    ion-icon {
      display: none;
    }
  }
`;
export const StyledLinkItem = styled(Link)`
  list-style: none;
  text-decoration: none;
  border-bottom: 2px solid ${({ active, theme }) => (active ? theme.tertiary : 'transparent')};
  color: white;
  font-size: 18px;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.tertiary};
    color: lightcyan;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
    color: black;
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: none;

    &:hover {
      border-bottom: none;
      color: black;
    }
  }
`;
