import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getLinkUrl, getPath, discussion } from '../../helpers';
import { Story as StoryModel } from '../../services/node-hnapi';

const StoryLink = (data: StoryModel) => (
  <a
    href={getLinkUrl(data)}
    className="bg-blue-100 hover:bg-blue-150 rounded-sm p-1 -m-1 break-words visited:bg-white"
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

  return (
    <div className="flex py-4 border-solid border-gray-100 border-b">
      <div 
        className="flex content-center items-center justify-center text-gray-600"
        style={{ flexBasis: '4rem', flexShrink: 0 }}
      >
        {position}
      </div>
      <div className="w-full">
        <div className="mb-1">
          {StoryLink(data)}
        </div>
        <div className="text-sm text-gray-700">
          {data.points && (
            <span>
              {data.points} points
              by&nbsp;
              <Link 
                to={`/user/${data.user}`}
                className="hover:text-gray-600"
              >
                {data.user}
              </Link>&nbsp;
            </span>
          )}
          <span className="md:inline-block">
            <Link
              to={getPath(data)}
              className="hover:text-gray-600"
            >
              {data.time_ago}
            </Link>
          </span>
            {discussion(data) &&
              <Fragment>
                <div className="hidden md:inline">
                  &nbsp;|&nbsp;
                </div>
                <div className="md:inline-block">
                  <Link
                    to={getPath(data)}
                    className="hover:text-gray-600"
                  >
                    {discussion(data)}
                  </Link>
                </div>
              </Fragment>
            }
        </div>
      </div>
    </div>
  );
}