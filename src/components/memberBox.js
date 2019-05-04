import React from 'react';
import styled from 'styled-components';

const Member = styled.a`
  display: block;
  flex-basis: 21%;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 2px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  font-family: 'Noto Sans KR', -apple-system, sans-serif;
  color: inherit;
  &:visited {
    color: inherit;
  }
  text-decoration: none;
`;

const MemberImage = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
`;

const Label = styled.p`
  display: inline-block;
  margin-right: 5px;
  font-weight: bold;
`;

const InfoContainer = styled.div`
  padding: 5px;
  font-size: 12px;
`;

const Info = styled.div`
  margin: 10px 0;
`;

const MemberName = styled.span`
  display: inline-block;
`;
const MemberSkill = styled.span`
  display: inline-block;
`;

const MemberMemo = styled.span`
  display: inline-block;
`;

const MemberBox = ({ username, name, skill, memo }) => (
  <Member
    href={`https://github.com/${username}`}
    target='_blank'
    rel='noopener noreferrer'>
    <MemberImage
      src={`https://github.com/${username}.png?size=270`}
      alt='profile'
    />
    <InfoContainer>
      <Info>
        <MemberName>
          <Label>NAME:</Label>
          {name}
        </MemberName>
      </Info>
      <Info>
        <MemberSkill>
          <Label>SKILL:</Label>
          {skill}
        </MemberSkill>
      </Info>
      <Info>
        <MemberMemo>
          <Label>MEMO:</Label>
          {memo}
        </MemberMemo>
      </Info>
    </InfoContainer>
  </Member>
);

export default MemberBox;
