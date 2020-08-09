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
  const discussionLabel = discussion(item);

  const renderItem = (data: ItemModel) => {
    if (data && data.comments) {
      return (
        <div className="p-4 dark:p-1 dark:px-2 bg-white dark:bg-gray-600">
          <h1 className="text-2xl font-bold mb-4">
            <a
              className="bg-blue-100 hover:bg-blue-150 rounded-sm p-1 -m-1 inline-flex items-center flex-wrap break-all sm:break-normal visited:bg-white dark:text-gray-100 dark:hover:text-gray-700"
              href={getLinkUrl(data)}
            >
              <span>
                {data.title}
              </span>
              {data.domain &&
                <Fragment>
                  &nbsp;
                  <span className="text-base">({data.domain})</span>
                </Fragment>
              }
            </a>
          </h1>
          <div className="text-gray-600 dark:text-gray-300">
            {data.points && (
              <span>
                <span className="break-all sm:break-normal">
                  {data.points} {data.points === 1 ? 'point ' : 'points '}
                  <span>by</span> <Link className="dark:underline" to={`/user/${data.user}`}>{data.user}</Link>
                  {discussionLabel &&
                    <span className="inline-block">
                      &nbsp;{discussionLabel}
                    </span>
                  }
                </span>
              </span>
            )}
          </div>
          <div
            className="mt-3"
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
      <div className="my-4 py-2 px-4 dark:px-2 bg-white dark:bg-gray-600 overflow-x-auto">
          <Comments data={data.comments} />
      </div>
    );
  }

  const renderContents = (data: ItemModel) => {
    return (
      <div className={isFetching ? 'opacity-25' : ''}>
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
    <div>
      {renderContents(item)}
    </div>
  );
}