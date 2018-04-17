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
    <Pagination
      className="page__pagination"
      page={page}
      articlesPerPage={articlesPerPage}
      totalArticles={totalArticles}
    />
  </div>
);

export default HomePage;
