import React, { useState } from 'react';
import { StyledDiscordInviteWrapper } from './styled';

const LocalStageKeyForBanner = 'isDiscordBannerVisible';

const DiscordInvite = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(localStorage.getItem(LocalStageKeyForBanner) ?? 'true');

  const handleDiscordLink = () => {
    window.open('http://server.codecrafts.co.uk', '_blank');

    localStorage.setItem(LocalStageKeyForBanner, false);
    setIsBannerVisible(false);
  };

  return isBannerVisible === 'true' ? (
    <StyledDiscordInviteWrapper>
      <ion-icon name="logo-discord" />

      <span className="btn-group">
        <h3>Join our Discord Community!</h3>
        <ion-icon onClick={handleDiscordLink} name="arrow-redo-outline" />
        <ion-icon onClick={() => setIsBannerVisible(false)} name="close-outline" />
      </span>
    </StyledDiscordInviteWrapper>
  ) : null;
};

export default DiscordInvite;
