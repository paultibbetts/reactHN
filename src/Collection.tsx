import React, { Component } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { getCollection } from './actions';
import Item from './components/Item';
import Pagination from './components/Pagination';
import { scrollToTop, renderLoading, setTitle } from './helpers';
import { IStoreState, IItem, CollectionTypes } from './types';

interface MatchParams {
  name?: string,
  page?: string
}

interface Props extends IStoreState,
  RouteComponentProps<MatchParams>,
  DispatchProp {
  type: CollectionTypes,
  dispatch: any
}

class Collection extends Component<Props> {

  componentDidMount() {
    this.getData(this.props.type);
    setTitle(this.props.type === 'news' ? 'Top' : this.props.type)
    scrollToTop();
  }

  componentDidUpdate(prevProps: Props) {
    const typeChanged = this.props.type !== prevProps.type;
    const pageChanged = this.props.match.params.page !== prevProps.match.params.page
    if (typeChanged || pageChanged) {
      setTitle(this.props.type)
      this.getData(this.props.type, this.props.match.params.page);
    }
  }

  getData(type: string, page: string = '1') {
    this.props.dispatch(getCollection(type, page || '1'));
  }

  renderContent(content: any[]) {
    if (!content) return;
    const page = this.props.match.params.page || '1';
    if (content.length > 0) {
      return (
        <div>
          {this.renderList(content, content.length)}
          <Pagination page={page} type={this.props.type} />
        </div>
      );
    }
    if (!this.props.isFetching) {
      const url = this.props.match.path.replace(':page?', (Number(page) - 1).toString());
      return (
        <div className="container content">
          <p>There's nothing to show here…</p>
          <a href={url}>
            Try the previous page?
          </a>
        </div>
      );
    }
    renderLoading();
  }

  renderList(data: IItem[], perPage: number) {
    let classNames = "collection content";
    if (this.props.isFetching) {
      classNames = `${classNames} is-fetching`;
    }
    return (
      <div className={classNames}>
        <ol className="collection__list">
          {this.renderItems(data, perPage)}
        </ol>
      </div>
    );
  }

  renderItems(data: IItem[], perPage: number) {
    const page = this.props.match.params.page || '1';
    return data.map((data, index: number) => (
      <li key={index}>
        <Item
          key={index}
          index={index}
          data={data}
          page={page}
          perPage={perPage}
        />
      </li>
    ));
  }

  render() {
    if (Number(this.props.match.params.page) > 10) {
      return (
        <Redirect to={this.props.match.path.replace(':page', '10')} />
      );
    }
    return (
      <div className="container">
        {this.renderContent(this.props[this.props.type])}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => state.collections;

export default connect<IStoreState>(mapStateToProps)(Collection);
