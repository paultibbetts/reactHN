import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import discussion from './discussion';
import { getLinkUrl, getPath } from '../helpers';

const ItemLink = (data) => (
  <a href={getLinkUrl(data)} className="item__link break-words">
    {data.title}
    &nbsp;
    {data.domain &&
      <span className="break-words">({data.domain})</span>
    }
  </a>
)
const Item = (props) => {

  const { data, index, page } = props;
  const perPage = props.perPage || 30;
  const position = (index + 1) + (page - 1) * perPage;

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