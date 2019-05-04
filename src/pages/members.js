import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, StaticQuery } from 'gatsby';
import MemberBox from '../components/memberBox';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Song Myung', sans-serif;
`;

const MemberPage = () => (
  <Layout>
    <SEO title='Members' />
    <Container>
      <StaticQuery
        query={graphql`
          query MemberQuery {
            site {
              siteMetadata {
                members {
                  username
                  name
                  skill
                  memo
                }
              }
            }
          }
        `}
        render={(data) =>
          data.site.siteMetadata.members.map((member, index) => (
            <MemberBox key={index} {...member} />
          ))
        }
      />
    </Container>
  </Layout>
);

export default MemberPage;
