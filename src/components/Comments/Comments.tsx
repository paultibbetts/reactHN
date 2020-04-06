import React from 'react';
import Comment from '../Comment';
import { Comment as CommentModel } from '../../services/node-hnapi';

interface ICommentsProps {
  data: CommentModel[]
}

export const Comments = (props: ICommentsProps): JSX.Element => {
  const { data: comments } = props;
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <Comment data={comment} />
        </li>
      ))}
    </ul>
  );
}