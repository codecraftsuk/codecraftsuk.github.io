import React from 'react';
import { StyledCardWrapper } from './styled';

import maleAvatar from '../../assets/images/male-avatar.svg';

const TeamMember = () => (
  <StyledCardWrapper>
    <img src={maleAvatar} alt="" />

    <h3>Full name</h3>
    <p className="job-title">Job Title</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam aperiam esse possimus minima, molestias
      iste nesciunt nam necessitatibus officia?
    </p>
  </StyledCardWrapper>
);

export default TeamMember;
