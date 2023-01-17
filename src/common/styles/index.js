import styled, { css } from 'styled-components';

export const StyledFlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  width: 100%;
  margin: 0 auto;
  padding: 50px 0px;
  /* text-align: justify; */

  /* @media only screen and (max-width: 932px) {
    color: red;
    justify-content: center;
  } */
`;

export const StyledFullWidth = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  width: 100%;

  ${({ shouldBend }) =>
    shouldBend &&
    css`
      clip-path: polygon(100% 0, 100% 80%, 0 100%, 0 20%);
      padding-bottom: 11rem;
      /* background-color: #0a2540; */
      color: #fff;
      padding-top: 13rem;

      ${({ theme: { breakPoints } }) => breakPoints.down('md')} {
        clip-path: polygon(100% 0, 100% 80%, 0 100%, 0 10%);
    
    `}
`;
