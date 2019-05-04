import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import ExternalLink from '../../static/icons/external-link.svg';
import { graphql, StaticQuery } from 'gatsby';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const WeekContainer = styled.div`
  margin: 50px 0;
`;

const Week = styled.h2`
  font-weight: bold;
  font-family: 'Exo', -apple-system, sans-serif;
  font-size: 32px;
`;

const WeekText = styled.span`
  display: inline-block;
  width: auto;
  border-bottom: 1px solid #222222;
  padding: 10px;
`;

const SlideInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Noto Sans KR', -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin: 15px 0;
`;

const Presenter = styled.p`
  flex-basis: 10%;
`;

const Topic = styled.p`
  flex-basis: 45%;
`;

const OutLink = styled.a`
  display: inline-block;
`;

const Icon = styled.i`
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("${ExternalLink}") no-repeat center;
  background-size: contain;
`;

const Archive = () => (
  <Layout>
    <Container>
      <StaticQuery
        query={graphql`
          query ArchiveQuery {
            site {
              siteMetadata {
                archives {
                  week
                  data {
                    presenter
                    topic
                    slideLink
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          const { archives } = data.site.siteMetadata;
          archives.sort((a, b) => a.week < b.week);
          return (
            <>
              {archives.map((archive, index) => {
                const { data } = archive;
                return (
                  <WeekContainer key={index}>
                    <Week>
                      <WeekText>{archive.week}th Week</WeekText>
                    </Week>
                    {data.map((datum, i) => (
                      <SlideInfo key={i}>
                        <span>{i + 1}</span>
                        <Presenter>{datum.presenter}</Presenter>
                        <Topic>{datum.topic}</Topic>
                        <OutLink
                          href={datum.slideLink}
                          rel='noreferrer noopener'
                          target='_blank'>
                          <Icon />
                        </OutLink>
                      </SlideInfo>
                    ))}
                  </WeekContainer>
                );
              })}
            </>
          );
        }}
      />
    </Container>
  </Layout>
);

export default Archive;
