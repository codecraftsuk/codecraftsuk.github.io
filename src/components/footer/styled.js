/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooterWrapper = styled.div`
  background-color: #212121;
  color: white;
  display: flex;
  padding: 30px 10px;

  flex-wrap: wrap;

  & > * {
    flex: 1 0 300px;
  }
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin: 20px 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding-bottom: 5px;
  margin: 8px 0;

  /* background-image: linear-gradient(#ffd900, #ffd900); */
  background: rgb(238, 12, 136);
  background: linear-gradient(90deg, rgba(238, 12, 136, 1) 29%, rgba(250, 86, 110, 1) 60%);
  background-repeat: no-repeat;
  background-position: 0% 100%;
  background-size: 100% 2px;
  transition: background-size 0.3s, background-position 0.3s ease-in 0.5s;

  &:hover {
    background-size: 100% 100%;
    background-position: 0% 0%;
    transition: background-position 0.3s, background-size 0.3s ease-in 0.5s;
  }
`;

export const StyledCopyRight = styled.div`
  background-color: #212121;
  text-align: center;
  color: white;
  padding-bottom: 60px;
`;
