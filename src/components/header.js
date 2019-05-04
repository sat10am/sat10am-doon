import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const NavHeader = styled.header`
  font-family: 'Exo Thin', -apple-system, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #ffffff;
  background: #111111;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
`;

const H1 = styled.h1``;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

const LinkItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LinkItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  //&:last-child {
  //  margin-right: 0;
  //}
`;

const Header = ({ siteTitle, menus }) => (
  <NavHeader>
    <Nav>
      <H1>
        <StyledLink to='/'>{siteTitle}</StyledLink>
      </H1>
      <LinkItems>
        {menus.map((menu, index) => (
          <LinkItem key={index}>
            <StyledLink to={menu.link}>{menu.name}</StyledLink>
          </LinkItem>
        ))}
      </LinkItems>
    </Nav>
  </NavHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
