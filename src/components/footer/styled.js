/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding-top: 70px;

  h1 {
    width: min(95%, 1000px);
    margin: 0 auto;
    border-top: 2px dotted lightgrey;
    font-size: 2.1rem;
    cursor: pointer;
    padding: 10px 0 0 0;
    margin-bottom: 10px;

    color: ${({ theme }) => theme.primaryText};
    &:hover {
      opacity: 0.7;
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
  padding-top: 20px;

  & > * {
    color: ${({ theme }) => theme.primaryText};
    font-size: 14.4px;
  }

  h3 {
    margin-bottom: 6px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 6px 0;
  text-decoration: none;
  opacity: 1;
  font-weight: 300;

  &:hover {
    opacity: 0.5;
  }
`;

export const StyledCopyRight = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  text-align: center;
  color: ${({ theme }) => theme.primaryText};

  padding-bottom: 70px;
`;

export const StyledSocials = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px 0px;
  color: ${({ theme }) => theme.primaryText};
  width: min(95%, 1000px);
  margin: 0 auto;
  padding-bottom: 20px;
  margin-top: 30px;

  p {
    margin-bottom: 20px;
    font-size: 14px;
  }

  h3 {
    margin-bottom: 10px;
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
