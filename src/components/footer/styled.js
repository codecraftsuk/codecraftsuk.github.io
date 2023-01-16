/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.secondary};
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
  &:not(:last-child) {
    border-right: 2px dotted lightgray;
  }
  display: flex;
  flex-direction: column;
  /* padding: 0 20px; */
  margin: 20px;

  & > * {
    color: ${({ theme }) => theme.primaryText};
  }
`;

export const StyledLink = styled(Link)`
  padding: 5px;
  text-decoration: none;
  opacity: 1;

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
  /* background-color: inherit; */
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px 20px;
  text-align: center;
  color: ${({ theme }) => theme.primaryText};

  /* border: 1px solid; */

  /* width: min(100%, 1500px); */
  margin: 0 auto;
  padding-bottom: 20px;

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
