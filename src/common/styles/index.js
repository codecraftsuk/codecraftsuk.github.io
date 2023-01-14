import styled from 'styled-components';

export const StyledFlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  width: min(100%, 1100px);
  margin: 0 auto;
  padding: 50px 0;
  text-align: justify;
  /* border: 1px solid; */
`;

export const StyledFullWidth = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  width: 100%;
`;
