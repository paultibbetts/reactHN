import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import discussion from './discussion';
import { getLinkUrl, getPath } from '../helpers';
import { IItem } from '../types';

const ItemLink = (data: IItem) => (
  <a href={getLinkUrl(data)} className="item__link break-words">
    {data.title}
    &nbsp;
    {data.domain &&
      <span className="break-words">({data.domain})</span>
    }
  </a>
)

interface IItemProps {
  perPage: number,
  index: number,
  page: string
  data: IItem,
}

const Item = (props: IItemProps) => {

  const { data, index, page } = props;
  const perPage = props.perPage || 30;
  const position = (index + 1) + (Number(page) - 1) * perPage;

  return (
    <div className="item">
      <div className="item__position center">
        {position}
      </div>
      <div className="item__content">
        {ItemLink(data)}
        <div className="item__details">
          {data.points && (
            <span>
              {data.points} points
              by <Link to={`/user/${data.user}`}>{data.user}</Link>&nbsp;
            </span>
          )}
          <Link to={getPath(data)}>
            {data.time_ago}
          </Link>
          {discussion(data) &&
            <Fragment>
              &nbsp;|&nbsp;
              <Link to={getPath(data)}>
                {discussion(data)}
              </Link>
            </Fragment>
          }
        </div>
      </div>
    </div>
  );
}

export default Item;