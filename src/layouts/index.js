import React from 'react';

import '../styles/main.scss';
import { getMeta } from '../utils/query';
import Header from '../components/header';
import Footer from '../components/footer';

const IndexLayout = ({ children, data }) => {
  const meta = getMeta(data);

  return (
    <div>
      <Header meta={meta} />
      <main>{children()}</main>
      <Footer meta={meta} />
    </div>
  );
};

export default IndexLayout;

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
