import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import dayjs from 'dayjs';
import Post from '../components/post';

const ImageContainer = styled.div`
  width: 100%;
  height: 360px;
  margin: 0 auto;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.75);
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayText = styled.span`
  position: absolute;
  display: inline-block;
  width: 480px;
  top: 50%;
  left: 50%;
  color: #d1d1d1;
  transform: translate(-15%, -50%);
  z-index: 1;
  font-size: 32px;
  font-family: 'Exo', -apple-system, sans-serif;
  font-weight: 600;
  text-align: right;
  line-height: 1.25;
`;

const PostListContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin: 60px auto 0;
`;

const START_DATE = '2018-06-30';
const delta = dayjs().diff(dayjs(START_DATE), 'day');

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <ImageContainer>
      <OverlayText>WE ARE LIVING D+{delta} DAYS FROM 2018.06.30</OverlayText>
      <Image src='./images/main_cover.jpg' alt='wallpaper' />
    </ImageContainer>
    <PostListContainer>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
        const imgPath = `./images/${i + 1}.jpeg`;
        return <Post key={i} postStyle='box' img={imgPath} />;
      })}
    </PostListContainer>
  </Layout>
);

export default IndexPage;
