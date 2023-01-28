/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledContactWrapper = styled.div`
  width: min(95%, 1000px);
  margin: 0 auto;
  margin-top: 40px;

  .back {
    text-align: left;
    /* margin-left: 20px; */
    font-size: 2rem;

    display: flex;
    align-items: center;

    ion-icon {
      cursor: pointer;
      margin-right: 30px;
      font-size: 2.8rem;
      margin-left: -15px;
    }

    h2 {
      margin-bottom: 0px;
    }
  }

  .container {
    /* width: 80%; */
    margin: 40px auto;
    text-align: left;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 20px;
  }

  p {
    line-height: 1.5;
    margin-bottom: 20px;
  }

  a {
    color: #645dd3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .cards-wrapper {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }

  @mixin random-bgr() {
    background: rgb(random(255), random(255), random(255));
  }
`;

export const StyledContactCard = styled.div`
  width: 400px;
  border-radius: 8px;
  padding: 60px 30px;
  position: relative;
  overflow: hidden;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    height: 15px;
    background-color: ${({ bgColor }) => bgColor || 'purple'};
    width: 100%;
    left: 0;
    right: 0;
  }

  .info > * {
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;
