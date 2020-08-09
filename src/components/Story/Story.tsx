import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getLinkUrl, getPath, discussion } from '../../helpers';
import { Story as StoryModel } from '../../services/node-hnapi';

const StoryLink = (data: StoryModel) => (
  <a
    href={getLinkUrl(data)}
    className="bg-blue-150 hover:bg-blue-500 dark:bg-blue-100 rounded-sm p-1 break-words visited:bg-white hover:text-gray-700 dark:text-gray-100 dark-hover:text-gray-700"
  >
    {data.title}
    &nbsp;
    {data.domain &&
      <span className="break-words">({data.domain})</span>
    }
  </a>
)

interface Props {
  perPage: number,
  index: number,
  page: string
  data: StoryModel,
}

export const Story = (props: Props): JSX.Element => {
  const { data, index, page } = props;
  const perPage = props.perPage || 30;
  const position = (index + 1) + (Number(page) - 1) * perPage;
  const discussionLabel = discussion(data);

  return (
    <div className="flex py-4 border-solid border-gray-100 dark:border-b-0 border-b">
      <div 
        className="flex content-center items-center justify-center text-gray-600 dark:text-gray-100"
        style={{ flexBasis: '3rem', flexShrink: 0 }}
      >
        {position}
      </div>
      <div className="w-full pl-1">
        <div className="mb-1">
          {StoryLink(data)}
        </div>
        <div className="pl-1 text-sm text-gray-700 dark:text-gray-300">
          {data.points && (
            <span>
              {data.points} {data.points === 1 ? 'point ' : 'points '}
              by&nbsp;
              <Link 
                to={`/user/${data.user}`}
                className="hover:underline"
              >
                {data.user}
              </Link>&nbsp;
            </span>
          )}
          <span className="md:inline-block">
            <Link
              to={getPath(data)}
              className="hover:underline"
            >
              {data.time_ago}
            </Link>
          </span>
            {discussionLabel &&
              <Fragment>
                <div className="hidden md:inline">
                  &nbsp;|&nbsp;
                </div>
                <div className="md:inline-block">
                  <Link
                    to={getPath(data)}
                    className="hover:underline"
                  >
                    {discussionLabel}
                  </Link>
                </div>
              </Fragment>
            }
        </div>
      </div>
    </div>
  );
}