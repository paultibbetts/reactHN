import React from 'react';
import Comments from '../Comments';
import { Link } from 'react-router-dom';
import { renderMarkup } from '../../helpers';
import { Comment as CommentModel } from '../../services/node-hnapi';

interface ICommentProps {
  data: CommentModel
}

export const Comment = (props: ICommentProps): JSX.Element => {
  const { data: comment } = props;
  return (
    <div
      style={{ paddingLeft: `${comment.level}rem` }}
    >
      <div className="mb-4">
        <div className="text-gray-600 mb-2">
          <Link
            className="underline pb-4"
            to={`/user/${comment.user}`}
          >
            {comment.user}
          </Link> &nbsp;
          <span>{comment.time_ago}</span>
        </div>
        <div
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