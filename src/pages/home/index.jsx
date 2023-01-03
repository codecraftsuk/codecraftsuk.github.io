import React from 'react';
import Slider from '../../components/Slider';
import { StyledContentWrapper, StyledInfoWrapper } from './styled';

const sliderContent = [
  {
    title: 'Title 1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quia sequi excepturi nesciunt dolores possimus nisi. Culpa quam sint modi.',
  },
  {
    title: 'Title 2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quia sequi excepturi nesciunt dolores possimus nisi.',
  },
];

function Home() {
  return (
    <div>
      <Slider sliderContent={sliderContent} />

      <StyledContentWrapper>
        <StyledInfoWrapper>
          <h1>Creative Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto, ex accusamus error, amet veniam
            quis, quidem ullam impedit obcaecati fuga! Ipsa esse eaque iure doloribus nulla distinctio dicta blanditiis?
          </p>
        </StyledInfoWrapper>
      </StyledContentWrapper>
    </div>
  );
}
export default Home;
