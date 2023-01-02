import React from 'react';
import Slider from '../../components/Slider';

const sliderContent = [
  {
    title: 'Title 1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quia sequi excepturi nesciunt dolores possimus nisi. Culpa quam sint modi.',
  },
  {
    title: 'Title 2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quia sequi excepturi nesciunt dolores possimus nisi. Culpa quam sint modi.kjd kldjf ',
  },
];

function Home() {
  return (
    <div>
      <Slider sliderContent={sliderContent} />
    </div>
  );
}

export default Home;
