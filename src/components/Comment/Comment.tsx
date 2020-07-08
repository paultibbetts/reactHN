import React from 'react';
import Comments from '../Comments';
import { Link } from 'react-router-dom';
import { renderMarkup, getPath } from '../../helpers';
import { Comment as CommentModel } from '../../services/node-hnapi';

interface ICommentProps {
  data: CommentModel
}

export const Comment = (props: ICommentProps): JSX.Element => {
  const { data: comment } = props;
  return (
    <div
      style={{
        minWidth: '15rem',
        paddingLeft: comment.level < 50 ? `${comment.level / 2}rem` : 0
      }}
    >
      <div className="mb-4">
        <div className="text-gray-600 dark:text-gray-300 mb-2 flex flex-wrap">
          <Link
            className="underline pb-4 break-all sm:break-normal"
            to={`/user/${comment.user}`}
          >
            {comment.user}
          </Link>&nbsp;
          <Link
            className="hover:underline pb-4"
            to={getPath(comment)}
          >
            <span className="">{comment.time_ago}</span>
          </Link>
        </div>
        <div
          className="overflow-x-auto text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={renderMarkup(comment.content)}
        />
      </div>
      {comment.comments.length > 0
        ? <Comments data={comment.comments} />
        : ''
      }
    </div>
  );
}