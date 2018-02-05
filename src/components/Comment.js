import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { renderMarkup } from '../helpers';

class Comment extends Component {
  render() {
  const { data: comment } = this.props;
  return (
      <div 
        className="comment"
        style={{marginLeft: `${comment.level * 1}rem`}}
      >
        <div>
          <Link 
            className="comment__author" 
            to={`/user/${comment.user}`}
          >
            {comment.user}
          </Link> &nbsp;
          <span className="comment__timeAgo">{comment.time_ago}</span>
        </div>
        <div dangerouslySetInnerHTML={renderMarkup(comment.content)} />
      </div>
    );
  }
}

export default Comment;