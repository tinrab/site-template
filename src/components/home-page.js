import React from 'react';

import Entry from '../components/entry';
import Pagination from './pagination';

const HomePage = ({ articles, page, articlesPerPage, totalArticles }) => (
  <div className="page">
    <div className="page__entries">
      {articles.map((article) => (
        <Entry article={article} key={article.slug} />
      ))}
    </div>
    <nav className="page__pagination">
      <Pagination
        page={page}
        articlesPerPage={articlesPerPage}
        totalArticles={totalArticles}
      />
    </nav>
  </div>
);

export default HomePage;
