import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getCollection } from './actions';
import Item from './components/Item';
import Pagination from './components/Pagination';
import { scrollToTop, renderLoading, setTitle } from './helpers';

class Collection extends Component {

  componentDidMount() {
    this.getData(this.props.type);
    setTitle(this.props.type === 'news' ? 'Top' : this.props.type)
    scrollToTop();
  }

  componentDidUpdate(prevProps) {
    const typeChanged = this.props.type !== prevProps.type;
    const pageChanged = this.props.match.params.page !== prevProps.match.params.page
    if (typeChanged || pageChanged) {
      setTitle(this.props.type)
      this.getData(this.props.type, this.props.match.params.page || null);
    }
  }

  getData(type, page = null) {
    if (page === null) {
      page = this.props.match.params.page || 1;
    }
    this.props.dispatch(getCollection(type, page));
  }
  
  renderContent(content) {
    if (! content) return;
    const page = this.props.match.params.page || 1;
    if (content.length > 0) {
      return (
        <div>
          {this.renderList(content, content.length)}
          <Pagination page={page} type={this.props.type} />
        </div>
      );
    }
    if (! this.props.isFetching) {
      const url = this.props.match.path.replace(':page?', page - 1);
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

  renderList(data, perPage) {
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

  renderItems(data, perPage) {
    const page = this.props.match.params.page || 1;
    return data.map((data, index) => (
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
    if (this.props.match.params.page > 10) {
      return (
        <Redirect to={this.props.match.path.replace(':page', 10)}/>
      );
    }
    return (
      <div className="container">
        {  this.renderContent(this.props[this.props.type]) }
      </div>
    );
  }
}

const mapStateToProps = state => state.collections;

export default connect(mapStateToProps)(Collection);
