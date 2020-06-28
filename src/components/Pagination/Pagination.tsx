import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../helpers';

interface IPaginationProps {
  type: string,
  page: string
}

export const Pagination = (props: IPaginationProps): JSX.Element => {
  const page = Number(props.page);
  const prevUrl = `/${props.type}/${(page - 1) > 1 ? page - 1 : 1}`;
  const nextUrl = `/${props.type}/${page + 1}`;
  const total = 10; // max limit of hnapi

  return (
    <div className="pagination content" style={{ lineHeight: "1" }}>
      {page > 1 &&
        <Link
          to={prevUrl}
          onClick={() => scrollToTop()}
          style={{ marginRight: "0.5rem" }}
        >
          prev
        </Link>
      }
      <span>&nbsp;{page || 1} / {total}&nbsp;</span>
      {page !== total &&
        <Link
          to={nextUrl}
          onClick={() => scrollToTop()}
          style={{ marginLeft: "0.5rem" }}
        >
          more
        </Link>
      }
    </div>
  );
}