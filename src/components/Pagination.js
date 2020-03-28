import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../helpers';

const Pagination = (props) => {
  let prevUrl, nextUrl;

  const createLinks = () => {
    const page = Number(props.page);
    const prev = `${(page - 1) > 1 ? page - 1 : 1 }`;
    const next = `${page + 1}`;
    if (props.type === 'news') {
      prevUrl = `/${prev}`;
      nextUrl = `/${next}`;
    } else {
      prevUrl = `/${props.type}/${prev}`;
      nextUrl = `/${props.type}/${next}`;
    }
  };

  createLinks();
  const page = Number(props.page);
  const total = 10; // max limit of hnapi

  return (
    <div className="pagination content" style={{lineHeight: "1"}}>
      {page > 1 &&
        <Link
          to={prevUrl}
          onClick={() => scrollToTop()}
          style={{marginRight: "0.5rem"}}
        >
          prev
        </Link>
      }
      <span>&nbsp;{page || 1} / {total}&nbsp;</span>
      {page !== total &&
        <Link
          to={nextUrl}
          onClick={() => scrollToTop()}
          style={{marginLeft: "0.5rem"}}
        >
          more
        </Link>
      }
    </div>
  );
}

export default Pagination;