import styled from 'styled-components';

export const StyledFlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  width: min(100%, 1500px);
  margin: 0 auto;
  padding: 50px 0;
  text-align: justify;
`;

export const StyledFullWidth = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  width: 100%;
`;
