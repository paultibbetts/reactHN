import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import  Comments from '../Comments';
import { discussion } from '../../helpers';
import { Item as ItemModel } from '../../services/node-hnapi';
import {
  renderMarkup,
  getLinkUrl,
} from '../../helpers';

interface Props {
  item: ItemModel
  isFetching: boolean
}

export const Item = (props: Props) => {

  const { item, isFetching } = props;

  const renderItem = (data: ItemModel) => {
    if (data && data.comments) {
      return (
        <div className="item container content">
          <h1 className="item__title">
            <a
              className="item__link"
              href={getLinkUrl(data)}
            >
              {data.title}
              {data.domain &&
                <Fragment>
                  &nbsp;
                  <span className="single__domain">({data.domain})</span>
                </Fragment>
              }
            </a>
          </h1>
          <div className="item__meta">
            {data.points && (
              <Fragment>
                {data.points} {data.points === 1 ? 'point ' : 'points '}
                by <Link to={`/user/${data.user}`}>{data.user}</Link>
              </Fragment>
            )}
            {discussion(data) &&
              <Fragment>
                &nbsp;|&nbsp;
                {discussion(data)}
              </Fragment>
            }
          </div>
          <div
            className="item__content"
            dangerouslySetInnerHTML={renderMarkup(data.content)}
          />
        </div>
      );
    }
    if (!isFetching) {
      return (
        <p>Nothing to show…</p>
      )
    }
  }

  const renderComments = (data: ItemModel) => {
    return (
      <div className="container content">
        <Comments data={data.comments} />
      </div>
    );
  }

  const renderContents = (data: ItemModel) => {
    return (
      <div className={isFetching ? 'is-fetching' : ''}>
        { renderItem(data) }
        {
          data.comments && data.comments.length > 0
            ? renderComments(data)
            : ''
        }
      </div>
    );
  }

  return (
    <div className="container">
      {renderContents(item)}
    </div>
  );
}