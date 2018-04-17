import React from 'react';
import Link from 'gatsby-link';

const Entry = ({ article }) => (
  <div className="entry">
    <div className="entry__content">
      <Link to={article.slug} className="entry__image">
        <img src={article.coverUrl} alt={article.title} />
      </Link>

      <div className="entry__body">
        <Link to={article.slug}>
          <h3 className="entry__title">{article.title}</h3>
        </Link>
        <div className="entry__info">
          <img
            className="entry__author-avatar"
            src={`https://www.gravatar.com/avatar/${
              article.author.emailHash
            }?s=120`}
            alt={`${article.author.name} avatar`}
          />
          <div className="entry__author">
            <Link
              className="entry__author-name"
              to={`/authors/${article.author.slug}`}
            >
              {article.author.name}
            </Link>
            <span className="entry__date">{article.date}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Entry;
