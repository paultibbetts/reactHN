import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getLinkUrl, getPath, discussion } from '../../helpers';
import { Story as StoryModel } from '../../services/node-hnapi';

const StoryLink = (data: StoryModel) => (
  <a
    href={getLinkUrl(data)}
    className="item__link break-words"
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
    <div className="story">
      <div className="story__position center">
        {position}
      </div>
      <div className="story__content">
        {StoryLink(data)}
        <div className="story__details">
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