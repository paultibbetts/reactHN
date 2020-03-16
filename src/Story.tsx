import React, { Component, Fragment } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { getSingle } from './actions';
import Comments from './components/Comments';
import discussion from './components/discussion';
import { scrollToTop, renderLoading, getLinkUrl, setTitle } from './helpers';
import { IStoreState, IItem } from './types';

interface MatchParams {
  id: string
}

interface IProps extends IStoreState,
  RouteComponentProps<MatchParams>,
  DispatchProp {
  dispatch: any,
  isFetching: boolean,
  state: IItem
}

class Story extends Component<IProps> {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(getSingle('item', id));
    scrollToTop();
  }

  componentDidUpdate() {
    if (this.props.state && this.props.state.title) {
      setTitle(this.props.state.title);
    }
  }

  renderStory(data: IItem) {
    if (data && Object.hasOwnProperty.call(data, 'comments')) {
      return (
        <div className="single container content">
          <h1 className="single__title">
            <a
              className="single__link"
              href={getLinkUrl(data)}
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
    if (!this.props.isFetching) {
      return (
        <p>Nothing to show…</p>
      )
    }
    return renderLoading();
  }

  renderComments(data: IItem) {
    if (data && Object.hasOwnProperty.call(data, 'id')) {
      if (!data.comments || data.comments.length === 0) return;
      return (
        <div className="container content">
          <Comments data={data.comments} />
        </div>
      );
    }
  }

  renderContents(data: IItem) {
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

const mapStateToProps = (state: any) => state.data;

export default connect<IStoreState>(mapStateToProps)(Story);