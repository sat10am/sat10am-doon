import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const META = {
  INTRODUCE: `SAT10AM 은 토요일 오전 10시에 모여 
    개발에 관한 다양한 주제를 가지고 세미나 형식으로 진행되는 스터디 그룹입니다`,
  SITE_URL:
    'https://www.notion.so/doondoony/SAT10AM-0a48ca7fee754baeb5a64979d499d07c',
};

const Container = styled.div`
  height: 100vh;
  padding-top: 40px;
  padding-left: 40px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  font-family: 'Noto Serif KR', -apple-system, sans-serif;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  font-family: 'Noto Serif KR', -apple-system, sans-serif;
  white-space: pre-line;
  margin: 20px 0;
`;

const OutLink = styled.a`
  text-decoration: underline;
  color: #222222;
  &:visited {
    color: #222222;
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO title='About' />
    <Container>
      <Title>ABOUT SAT10AM</Title>
      <Description>{META.INTRODUCE}</Description>
      <OutLink href={META.SITE_URL} target='_blank' rel='noopener noreferrer'>
        SAT10AM Notion Page
      </OutLink>
    </Container>
  </Layout>
);

export default AboutPage;
