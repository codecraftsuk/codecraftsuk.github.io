import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e1e1e2;
  padding: 40px 0 0 0;

  img {
    height: 50px;
    margin-left: 20px;
  }

  button {
    margin-right: 10px;
  }

  button:first-child {
    ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
      display: none;
    }
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo {
    position: react-transition;
    right: 0;
    top: 0;
    width: 60px;
    height: 60px;
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
  font-size: 14px;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.tertiary};
    color: lightcyan;
    transition: 1000ms;
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
