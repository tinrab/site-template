import React from 'react';
import Link from 'gatsby-link';

import _ from '../utils/helpers';

const Pagination = ({ page, articlesPerPage, totalArticles, basePath }) => {
  const pageCount = Math.ceil(totalArticles / articlesPerPage);
  basePath = basePath || '';

  return (
    <nav>
      <ul className="pagination">
        <li className={'pagination__item ' + (page == 1 ? 'disabled' : '')}>
          {page != 1 ? (
            <Link
              className="pagination__link"
              to={page == 2 ? basePath || '/' : `${basePath}/page/${page - 1}`}
            >
              Previous
            </Link>
          ) : null}
          {page == 1 ? (
            <span className="pagination__link">Previous</span>
          ) : null}
        </li>

        {_.forRange(1, pageCount + 1, (i) => (
          <li
            className={'pagination__item ' + (i == page ? 'active' : '')}
            key={i}
          >
            <Link
              className="pagination__link"
              to={i == 1 ? basePath || '/' : `${basePath}/page/${i}`}
            >
              {i}
            </Link>
          </li>
        ))}

        <li
          className={
            'pagination__item ' + (page == pageCount ? 'disabled' : '')
          }
        >
          {page != pageCount ? (
            <Link
              className="pagination__link"
              to={`${basePath}/page/${page + 1}`}
            >
              Next
            </Link>
          ) : null}
          {page == pageCount ? (
            <span className="pagination__link">Next</span>
          ) : null}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
