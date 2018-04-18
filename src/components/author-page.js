import React from 'react';
import Link from 'gatsby-link';

import Twitter from '../assets/twitter.svg';
import GitHub from '../assets/github.svg';
import Facebook from '../assets/facebook.svg';
import GooglePlus from '../assets/google-plus.svg';

const Info = ({ author }) => (
  <section className="author__info">
    <img
      className="author__avatar"
      src={`https://www.gravatar.com/avatar/${author.emailHash}?s=512`}
      alt={`${author.name} avatar`}
    />
    <h1 className="author__name">{author.name}</h1>
    <p className="author__bio">{author.bio}</p>
    <a className="author__mail" href={`mailto:${author.email}`}>
      {author.email}
    </a>
    <div className="author__social">
      {author.social.twitter && (
        <a
          className="author__social-link"
          href={`https://twitter.com/${author.social.twitter}`}
        >
          <Twitter className="author__social-icon" />
        </a>
      )}
      {author.social.github && (
        <a
          className="author__social-link"
          href={`https://github.com/${author.social.github}`}
        >
          <GitHub className="author__social-icon" />
        </a>
      )}
      {author.social.facebook && (
        <a
          className="author__social-link"
          href={`https://www.facebook.com/${author.social.facebook}`}
        >
          <Facebook className="author__social-icon" />
        </a>
      )}
      {author.social.googlePlus && (
        <a
          className="author__social-link"
          href={`https://plus.google.com/${author.social.googlePlus}`}
        >
          <GooglePlus className="author__social-icon" />
        </a>
      )}
    </div>
  </section>
);

const Articles = ({ articlesByMonth }) => (
  <section>
    <h2>Articles</h2>
    {Object.keys(articlesByMonth).map((month) => (
      <div key={month}>
        <h3 className="author__article-month">{month}</h3>
        <ul>
          {articlesByMonth[month].map((a) => (
            <li key={a.slug}>
              <Link className="author__article-title" to={`/${a.slug}`}>
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

const AuthorPage = ({ author, articles }) => (
  <div className="page page--narrow author">
    <Info author={author} />
    <Articles articlesByMonth={author.articlesByMonth} />
  </div>
);

export default AuthorPage;
