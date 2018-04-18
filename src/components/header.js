import React from 'react';
import Link from 'gatsby-link';

const Header = ({ meta }) => (
  <header>
    <nav className="header">
      <Link to="/">
        <span className="header__logo">{meta.site.title}</span>
      </Link>
    </nav>
  </header>
);

export default Header;
