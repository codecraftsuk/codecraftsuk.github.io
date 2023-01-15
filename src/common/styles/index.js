import styled, { css } from 'styled-components';

export const StyledFlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  /* text-align: justify; */
  border: 1px solid green;

  /* @media only screen and (max-width: 932px) {
    color: red;
    justify-content: center;
  } */
`;

export const StyledFullWidth = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  width: 100%;
  position: relative;

  ${({ shouldBend }) =>
    shouldBend &&
    css`
      &::before {
        content: '';
        position: absolute;
        background-color: ${({ bgColor }) => bgColor || 'transparent'};
        transition: all 1000ms ease;

        height: 300px;
        width: 100%;
        bottom: 0px;
        transform: skewY(-9deg);
        z-index: -1;
      }
    `}
`;
