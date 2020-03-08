import React from 'react';
import Comment from './Comment';

const Comments = (props) => {
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
