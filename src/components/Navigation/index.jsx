import React from "react";
import { StyledNavWrapper, StyledLinkItem } from "./styled";

const Navigation = () => {
  return (
    <StyledNavWrapper>
      <StyledLinkItem to="/">Home</StyledLinkItem>
      <StyledLinkItem to="courses">Courses</StyledLinkItem>
      <StyledLinkItem to="about">About Us</StyledLinkItem>
      <StyledLinkItem to="jobs">Jobs</StyledLinkItem>
      <StyledLinkItem to="contact">Contact</StyledLinkItem>
    </StyledNavWrapper>
  );
};

export default Navigation;
