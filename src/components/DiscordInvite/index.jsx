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

  const closeModal = (e) => {
    e.stopPropagation();
    setIsBannerVisible(false);
  };

  return isBannerVisible === 'true' ? (
    <StyledDiscordInviteWrapper onClick={handleDiscordLink}>
      <ion-icon name="logo-discord" />

      <div>
        <ion-icon onClick={closeModal} name="close-outline" />
        <h3>Join our Discord Community!</h3>
      </div>
    </StyledDiscordInviteWrapper>
  ) : null;
};

export default DiscordInvite;
