import React from 'react';
import { StyledCardWrapper } from './styled';

import maleAvatar from '../../assets/images/male-avatar.svg';

const TeamMember = ({ name, job, description }) => (
  <StyledCardWrapper>
    <img src={maleAvatar} alt="" />

    <h3>{name}</h3>
    <p className="job-title">{job}</p>
    <p>{description}</p>
  </StyledCardWrapper>
);

export default TeamMember;
