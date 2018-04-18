import React from 'react';
import Link from 'gatsby-link';

const Footer = ({ meta }) => (
  <footer className="footer">
    <div className="footer__content">
      <ul className="footer__links">
        <li>
          <a href="https://github.com/tinrab">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/tinrab">Twitter</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
      </ul>
      <p className="footer__body">
        2018 &copy; {meta.site.title}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
