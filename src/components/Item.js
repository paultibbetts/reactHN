import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import discussion from './discussion';

class Item extends Component {

  isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  getPath = (data) => `/item/${data.id}`;
  
  getLinkUrl = (data) => this.isValidUrl(data.url) ? 
    data.url : 
    this.getPath(data)
  
  renderLink = (data) => (
    <a href={this.getLinkUrl(data)} className="item__link break-words">
      {data.title}
      &nbsp;
      {data.domain &&
        <span className="break-words">({data.domain})</span>
      }
    </a>
  )

  render() {
    const { data, index, page } = this.props;
    const perPage = this.props.perPage || 30;
    const position = (index + 1) + (page - 1) * perPage;
    return (
      <div className="item">
        <div className="item__position center">
          {position}
        </div>
        <div className="item__content">
          {this.renderLink(data)}
          <div className="item__details">
            {data.points && (
              <span>
                {data.points} points 
                by <Link to={`/user/${data.user}`}>{data.user}</Link>&nbsp;
              </span>
            )}
            <Link to={this.getPath(data)}>
              {data.time_ago}
            </Link>
            {discussion(data) && 
              <Fragment>
                &nbsp;|&nbsp;
                <Link to={this.getPath(data)}>
                  {discussion(data)}
                </Link>
              </Fragment>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Item;