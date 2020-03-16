import React from 'react';
import Comment, { IProps as ICommentProps } from './Comment';

interface ICommentsProps {
  data: ICommentProps[]
}

const Comments = (props: ICommentsProps) => {
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
