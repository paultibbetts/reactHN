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
        <div className="p-4 dark:p-1 bg-white dark:bg-gray-600">
          <h1 className="text-2xl font-bold mb-4">
            <a
              className="bg-blue-100 hover:bg-blue-150 rounded-sm p-1 -m-1 inline-block break-words visited:bg-white dark:text-gray-100 dark:hover:text-gray-700"
              href={getLinkUrl(data)}
            >
              {data.title}
              {data.domain &&
                <Fragment>
                  &nbsp;
                  <span className="text-base">({data.domain})</span>
                </Fragment>
              }
            </a>
          </h1>
          <div className="text-gray-600 dark:text-gray-100">
            {data.points && (
              <Fragment>
                {data.points} {data.points === 1 ? 'point ' : 'points '}
                by <Link className="dark:underline" to={`/user/${data.user}`}>{data.user}</Link>
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
      <div className="my-4 px-2 bg-white dark:bg-gray-600">
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