import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { getCollection } from './actions';
import { IStoreState, CollectionTypes } from './types';
import { ItemModel } from './models/Item';
import { scrollToTop, renderLoading, setTitle } from './helpers';
import Item from './components/Item';
import Pagination from './components/Pagination';
import { RootState } from './reducers';


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

class Collection extends React.Component<Props> {

  componentDidMount(): void {
    this.getData(this.props.type);
    setTitle(this.props.type === 'news' ? 'Top' : this.props.type)
    scrollToTop();
  }

  componentDidUpdate(prevProps: Props): void {
    const typeChanged = this.props.type !== prevProps.type;
    const pageChanged = this.props.match.params.page !== prevProps.match.params.page
    if (typeChanged || pageChanged) {
      setTitle(this.props.type)
      this.getData(this.props.type, this.props.match.params.page);
    }
  }

  getData(type: string, page: string = '1'): void {
    this.props.dispatch(getCollection(type, page || '1'));
  }

  renderContent(content: ItemModel[]): JSX.Element {
    const page = this.props.match.params.page || '1';
    if (content.length > 0) {
      return (
        <div>
          {this.renderList(content, content.length)}
          <Pagination page={page} type={this.props.type} />
        </div>
      );
    }
    else if (!this.props.isFetching) {
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
    else {
      return renderLoading();
    }
  }

  renderList(data: ItemModel[], perPage: number): JSX.Element {
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

  renderItems(data: ItemModel[], perPage: number): JSX.Element[] {
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

  render(): JSX.Element {
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

const mapStateToProps = (state: RootState) => state.collections;

export default connect(mapStateToProps)(Collection);
