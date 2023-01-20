import styled, { css } from 'styled-components';

export const StyledSuccessWrapper = styled.div`
  width: min(95%, 1000px);
  margin: 50px auto;
  /* border: 1px solid; */
`;

export const StyledSuccessContent = styled.div`
  opacity: ${({ isFinished }) => (isFinished ? '1' : '0')};
  transition: opacity 800ms ease;
  display: flex;
  height: 70vh;
  align-items: center;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  text-align: center;

  ${({ theme }) => theme.breakPoints.down('md')} {
    justify-content: center;
    height: 80vh;
  }

  div:first-child {
    width: min(100%, 400px);

    & > * {
      margin-bottom: 30px;
    }

    p {
      margin-top: 30px !important;
    }
  }

  img {
    width: min(100%, 300px);
  }

  .container {
    /* width: 1200px; */
    margin: auto;
    position: relative;
    bottom: 10px;
  }

  .timeline {
    position: relative;
  }

  .timeline li {
    list-style: none;
    float: left;
    width: 33.3333%;
    position: relative;
    text-align: center;
    text-transform: capitalize;
    margin: 20px 0;
  }

  ul:nth-child(1) {
    color: #4caf50;
  }

  .timeline li:before {
    content: '';
    width: 30px;
    height: 30px;
    border: 3px solid #4caf50;
    border-radius: 50%;
    display: flex;
    text-align: center;
    line-height: 50px;
    margin: 0 auto 10px auto;
    background: #fff;
    color: #000;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .timeline li:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: grey;
    top: 18px;
    left: -50%;
    z-index: -999;
    transition: all ease-in-out 0.3s;
  }

  .timeline li:first-child:after {
    content: none;
  }
  .timeline li.active-tl {
    color: #555555;
  }
  .timeline li.active-tl:before {
    background: #4caf50;
    color: #f1f1f1;
  }

  .timeline li.active-tl + li:after {
    background: #4caf50;
  }
`;
