/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding-top: 100px;

  .full-width {
    width: min(95%, 1000px);
    margin: 0 auto;
  }

  h1 {
    border-top: 2px dotted #ccc;
    padding-top: 10px;
    font-size: 32px;
    margin: 10px 0 10px 0;

    a {
      text-decoration: none;
      color: #0a2540;
      font-weight: 800;
    }

  }
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  /* padding: 70px 200px 40px 200px; */
  width: min(95%, 1000px);
  margin: 0 auto;

  flex-wrap: wrap;

  & > * {
    flex: 1 0 min(100px, 300px);
  }
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-weight: 400;

  & > * {
    color: ${({ theme }) => theme.primaryText};
    font-size: 14.4px;
  }

  h3 {
    margin-bottom: 6px;
    font-weight: 700;
  }
`;

export const StyledLink = styled(Link)`
  margin: 6px 0;
  text-decoration: none;
  font-weight: 400;
  width: fit-content;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledCopyRight = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  text-align: left;
  color: ${({ theme }) => theme.primaryText};
  padding-bottom: 100px;

  h3 {
    font-size: 14px;
  }
`;

export const StyledSocials = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px 0px;
  color: ${({ theme }) => theme.primaryText};
  width: min(95%, 1000px);
  margin: 0 auto;
  margin-top: 30px;
  font-size: 14px;

  p {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 14px !important;
    font-weight: 700;
  }

  ion-icon {
    font-size: 1.5rem;
    margin-right: 10px;
    /* background-color: #494766; */
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid;
    color: ${({ theme }) => theme.tertiary};

    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      color: white;
      transition: 500ms;
    }
  }
`;
