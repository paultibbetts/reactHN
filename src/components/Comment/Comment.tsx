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
      className="comment"
      style={{ marginLeft: `${comment.level * 1}rem` }}
    >
      <div className="mb-4">
        <div className="text-gray-600 dark:text-gray-100 mb-2">
          <Link
            className="underline pb-4"
            to={`/user/${comment.user}`}
          >
            {comment.user}
          </Link>&nbsp;
          <Link
            className="hover:underline pb-4"
            to={getPath(comment)}
          >
            <span className="whitespace-no-wrap">{comment.time_ago}</span>
          </Link>
        </div>
        <div
          dangerouslySetInnerHTML={renderMarkup(comment.content)}
        />
      </div>
      <div dangerouslySetInnerHTML={renderMarkup(comment.content)} />
      {comment.comments.length > 0
        ? <Comments data={comment.comments} />
        : ''
      }
    </div>
  );
}