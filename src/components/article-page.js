import React from 'react';
import Link from 'gatsby-link';

import Twitter from '../assets/twitter.svg';
import Facebook from '../assets/facebook.svg';
import GooglePlus from '../assets/google-plus.svg';

const ArticleHeader = ({ article }) => (
  <div className="page__meta">
    <div className="page__info">
      <img
        className="page__author-avatar"
        src={`https://www.gravatar.com/avatar/${
          article.author.emailHash
        }?s=120`}
        alt={`${article.author.name} avatar`}
      />
      <div className="page__author">
        <Link
          className="page__author-name"
          to={`/authors/${article.author.slug}`}
        >
          {article.author.name}
        </Link>
        <span className="page__date">{article.date}</span>
      </div>
    </div>
    <div className="page__share">
      <a
        className="button button--icon button--twitter"
        href={`https://twitter.com/intent/tweet?url=${article.permalink}&text=${
          article.title
        }`}
      >
        <Twitter />
      </a>
      <a
        className="button button--icon button--facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${
          article.permalink
        }`}
      >
        <Facebook />
      </a>
      <a
        className="button button--icon button--google-plus"
        href={`https://plus.google.com/share?url=${article.permalink}`}
      >
        <GooglePlus />
      </a>
    </div>
  </div>
);

const ArticleFooter = ({ article }) => (
  <div className="page__meta">
    <div className="page__tags">
      {article.tags.map((tag) => (
        <Link className="page__tag" key={tag.slug} to={`/tags/${tag.slug}`}>
          {tag.name}
        </Link>
      ))}
    </div>
    <div className="page__share">
      <a
        className="button button--icon button--twitter"
        href={`https://twitter.com/intent/tweet?url=${article.permalink}&text=${
          article.title
        }`}
      >
        <Twitter />
      </a>
      <a
        className="button button--icon button--facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${
          article.permalink
        }`}
      >
        <Facebook />
      </a>
      <a
        className="button button--icon button--google-plus"
        href={`https://plus.google.com/share?url=${article.permalink}`}
      >
        <GooglePlus />
      </a>
    </div>
  </div>
);

const ArticlePage = ({ article }) => (
  <div className="page page--narrow">
    <h1 className="page__title">{article.title}</h1>
    <ArticleHeader article={article} />
    <span dangerouslySetInnerHTML={{ __html: article.html }} />
    <ArticleFooter article={article} />
  </div>
);

export default ArticlePage;
