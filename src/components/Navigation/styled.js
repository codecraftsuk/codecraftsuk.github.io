import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WebFont from 'webfontloader';

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${({ theme }) => theme.primary}; */
  color: ${({ theme }) => theme.primaryPrimary};
  padding: 10px 0 0 0;
  width: min(90%, 1000px);
  margin: 0 auto;
  justify-content: space-between;

  img {
    height: 50px;

    ${({ theme: { breakPoints } }) => breakPoints.down('xs')} {
      width: 40px !important;
      height: 40px !important;
    }
  }

  .nav-link {
    display: flex;
    gap: 30px;

    ${({ theme: { breakPoints } }) => breakPoints.down('ml')} {
      gap: 30px;
    }
    ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
      gap: 15px;
    }
    ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
      display: none;
    }
  }

  button {
    margin-right: 10px;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    transform: rotate(160deg) translateY(-6px);
    animation: bounce 1s linear infinite;
    ${'' /* animation: spin 1s linear infinite; */}
  }

  @keyframes bounce {
    0% {
      transform: rotate(150deg) translateY(-6px);
    }
    50% {
      transform: rotate(170deg) translateY(-6px);
    }
    100% {
      transform: rotate(150deg) translateY(-6px);
    }
  }

  ${
    '' /* @keyframes spin {
      0% {transform: rotate(160deg) translateY(-6px);}
      100% {transform: rotate(520deg) translateY(-6px);}
  } */
  }

  button:nth-child(2) {
    height: 37px;
    width: 37px;
    background-color: transparent;
    border: none;
    outline: none;
  }

  ion-icon {
    font-size: 28px;
    color: ${({ theme }) => theme.lightText};
    &:hover {
      color: red;
    }
  }

  .btns {
    display: flex;
    align-items: center;
  }

  /* 
  ion-icon[name='close-outline'] {
    color: red;
    z-index: 15;
  }
  */
`;

export const StyledLinkItem = styled(Link)`
  list-style: none;
  text-decoration: none;
  border-bottom: 2px solid ${({ active, theme }) => (active ? theme.tertiary : 'transparent')};
  color: white;
  font-size: 1rem;
  ${'' /* color: ${({ theme }) => theme.lightText}; */}
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledLogo = styled(Link)`
  list-style: none;
  text-decoration: none;
  border-bottom: 2px solid ${({ active, theme }) => (active ? theme.tertiary : 'transparent')};
  font-size: 1.5rem;
  font-family: Kanit;
  ${'' /* color: ${({ theme }) => theme.lightText}; */}
  color: #fff;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledDot = styled(Link)`
  list-style: none;
  text-decoration: none;
  border-bottom: 2px solid ${({ active, theme }) => (active ? theme.tertiary : 'transparent')};
  font-size: 2rem;
  font-family: Kanit;
  ${'' /* color: ${({ theme }) => theme.lightText}; */}
  color: #fff;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`;

WebFont.load({
  google: {
    families: ['Kanit, Righteous', 'sans-serif'],
  },
});
