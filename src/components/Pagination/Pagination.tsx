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
    <div
      className="bg-white dark:bg-gray-600 p-3 flex text-center dark:text-white"
      style={{
        lineHeight: "1",
      }}
    >
      <Link
        to={prevUrl}
        onClick={() => scrollToTop()}
        className="flex-1 inline-block text-white p-3 hover:text-blue-500 border-transparent border-b-2"
      >
        {page > 1 ? 'prev' : '' }
      </Link>
      <span className="p-3 flex-1">&nbsp;{page || 1} / {total}&nbsp;</span>
        <Link
          to={nextUrl}
          onClick={() => scrollToTop()}
          className="flex-1 inline-block text-white p-3 hover:text-blue-500 border-transparent border-b-2"
        >
          {page !== total ? 'more' : '' }
        </Link>
    </div>
  );
}