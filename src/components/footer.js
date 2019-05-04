import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  background: #111111;
  width: 100%;
  height: 80px;
  margin-top: 60px;
`;

const CopyRightText = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-block;
  font-family: 'Exo Thin', -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 200;
  color: #9d9d9d;
  margin: 0 10px 10px 0;
`;

const Footer = () => (
  <StyledFooter>
    <CopyRightText>Copyright ⓒ 2019 SAT10AM All rights reserved.</CopyRightText>
  </StyledFooter>
);

export default Footer;
