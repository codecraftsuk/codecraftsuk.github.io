/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: #212121;
`;

export const StyledFooterWrapper = styled.div`
  color: white;
  display: flex;
  padding: 30px 10px;
  width: min(100%, 1500px);
  margin: 0 auto;

  flex-wrap: wrap;

  & > * {
    flex: 1 0 300px;
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
  padding-bottom: 60px;
`;
