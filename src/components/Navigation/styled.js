import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
export const StyledLinkItem = styled(Link)`
  list-style: none;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.tertiary};
  }
`;
