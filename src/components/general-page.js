import React from 'react';

const GeneralPage = ({ page }) => (
  <div className="page page--narrow">
    <h1 className="page__title">{page.title}</h1>
    <span dangerouslySetInnerHTML={{ __html: page.html }} />
  </div>
);

export default GeneralPage;
