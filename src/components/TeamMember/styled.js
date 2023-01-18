/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  /* border: 1px solid; */
  padding: 20px 10px;
  width: min(100%, 300px);
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 200ms linear;

  & > * {
    margin-bottom: 12px;
  }

  img {
    max-width: min(100%, 200px);
  }

  p {
    text-align: center !important;
    font-size: 15px;
  }

  .job-title {
    font-style: italic;
    font-size: 14px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
