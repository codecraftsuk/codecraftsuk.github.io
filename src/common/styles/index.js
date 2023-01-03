import styled from 'styled-components';

export const StyledFlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  width: min(100%, 1500px);
  margin: 0 auto;
`;

export const StyledFullWidth = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
`;
