import React from 'react';
import Comment, { Props as CommentProps } from './Comment';

interface CommentsProps {
  data: CommentProps[]
}

const Comments = (props: CommentsProps) => {
  const { data: comments } = props;
  return (
    <ul className="comments__list">
      {comments.map((comment, index) => (
        <li
          key={index}
          className="comments__listItem"
        >
          <Comment data={comment} />
        </li>
      ))}
    </ul>
  );
}

export default Comments
