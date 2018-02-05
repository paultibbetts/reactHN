import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingle } from './actions';
import Comment from './components/Comment';
import discussion from './components/discussion';
import { scrollToTop, renderLoading } from './helpers';

class Story extends Component {

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getSingle('item', id));
  }

  componentDidMount() {
    scrollToTop();
  }
  
  renderStory(data) {
    if (data && Object.hasOwnProperty.call(data, 'comments')) {
      return (
        <div className="single container content">
          <h1 className="single__title">
            <a 
              className="single__link" 
              href={data.url}
            >
              {data.title}
              {data.domain && 
                <Fragment>
                  &nbsp;
                  <span className="single__domain">({data.domain})</span>
                </Fragment>
              }
            </a>
          </h1>
          <div className="single__meta">
            {data.points && (
              <Fragment>
                {data.points} {data.points === 1 ? 'point ' : 'points '} 
                by <Link to={`/user/${data.user}`}>{data.user}</Link>
              </Fragment>
            )}
            {discussion(data) &&
              <Fragment>
                &nbsp;|&nbsp; 
                {discussion(data)}
              </Fragment>
            }
          </div>
        </div>
      );
    }
    if (! this.props.isFetching) {
      return (
        <p>Nothing to show…</p>
      )
    }
    return renderLoading();
  }

  
  renderComments(data) {
    if (data && Object.hasOwnProperty.call(data, 'id')) {
      if (! data.comments || data.comments.length === 0) return;
      const commentsAmount = `Showing ${data.comments.length} ${data.comments.length === 1 ? 'comment' : 'comments'}`;
      return (
        <div className="container content">
          {commentsAmount}
          {this.renderCommentsCollection(data.comments)}
        </div>
      );
    }
  }

  renderCommentsCollection(comments) {
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
    )
  }

  renderContents(data) {
    let classNames;
    if (this.props.isFetching) {
      classNames = 'is-fetching';
    }
    return (
      <div className={classNames}>
        {this.renderStory(data)}
        {this.renderComments(data)}
      </div>
    );
  }

  render() {
    const { state } = this.props;
    return (
      <div className="container">
        {this.renderContents(state)}
      </div>
    );
  }
}

const mapStateToProps = state => state.data;

export default connect(mapStateToProps)(Story);