import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #030506;
  padding: 20px 0;

  img {
    height: 34px;
  }

  div {
    width: min(100%, 1520px);
    display: flex;
    justify-content: space-around;
  }
`;
export const StyledLinkItem = styled(Link)`
  list-style: none;
  text-decoration: none;
  border-bottom: 2px solid ${({ active, theme }) => (active ? theme.tertiary : 'transparent')};
  color: white;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.tertiary};
    color: lightcyan;
  }
`;
