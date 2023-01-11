/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: #212121;
`;

export const StyledFooterWrapper = styled.div`
  color: white;
  display: flex;
  padding: 70px 200px 40px 200px;
  width: min(100%, 1500px);
  margin: 0 auto;

  flex-wrap: wrap;

  & > * {
    flex: 1 0 300px;
  }

  ${({ theme: { breakPoints } }) => breakPoints.down('sm')} {
    padding: 30px 60px;
  }
}

`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 20px 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding-bottom: 5px;
  padding-left: 10px;

  background: rgb(47, 46, 65);
  background: linear-gradient(90deg, #fb6169 29%, #2f2e41 60%);
  background-repeat: no-repeat;
  background-position: 0% 100%;
  background-size: 100% 2px;
  transition: background-position 0.05s, background-size 0.05s ease-in 0.05s;

  &:hover {
    background-size: 100% 100%;
    background-position: 0% 0%;
    transition: background-position 0.05s, background-size 0.05s ease-in 0.05;
  }
`;

export const StyledCopyRight = styled.div`
  background-color: #212121;
  text-align: center;
  color: white;
  padding-bottom: 70px;
`;

export const StyledSocials = styled.div`
  /* background-color: inherit; */
  background-color: #212121;
  padding: 5px 20px;
  text-align: center;
  color: white;
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
    background-color: white;
    margin-right: 10px;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    color: ${({ theme }) => theme.tertiary};

    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      color: white;
      transition: 500ms;
    }
  }
`;
