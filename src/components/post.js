import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
`;

const BoxPost = styled.div`
  flex-basis: 21%;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 2px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const RowPost = styled.div``;

const PostFactory = (style) => {
  switch (style) {
    case 'box':
      return BoxPost;
    case 'row':
      return RowPost;
    default:
      return BoxPost;
  }
};

const TextContainer = styled.div`
  height: 120px;
  padding: 10px;
  font-family: 'Noto Serif KR', -apple-system, sans-serif;
`;

const TextTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Text = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 200;
  white-space: pre-wrap;
  line-height: 1.25;
`;

const PLACEHOLDER = `오늘은 해커톤을 하는 날이다.
많이 와주셔서 잘 치뤄진 것 같다
정말 데~단헤!
`;

const Post = ({ postStyle = 'box', img, text }) => {
  const Box = PostFactory(postStyle);
  return (
    <Box>
      <Image src={img} alt='thumbnail' />
      <TextContainer>
        <TextTitle>이것은 제목입니다.</TextTitle>
        <Text>{text || PLACEHOLDER}</Text>
      </TextContainer>
    </Box>
  );
};

export default Post;
