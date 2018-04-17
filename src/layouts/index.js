import React from 'react';

import '../styles/main.scss';

const IndexLayout = ({ children }) => {
  return <div>{children()}</div>;
};

export default IndexLayout;
