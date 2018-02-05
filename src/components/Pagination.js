import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../helpers';

class Pagination extends Component {
  createLinks() {
    const page = Number(this.props.page);
    const prev = `${(page - 1) > 1 ? page - 1 : 1 }`;
    const next = `${page + 1}`;
    if (this.props.type === 'news') {
      this.prevUrl = `/${prev}`;
      this.nextUrl = `/${next}`;
    } else {
      this.prevUrl = `/${this.props.type}/${prev}`;
      this.nextUrl = `/${this.props.type}/${next}`;
    }
  }
  render() {
    this.createLinks();
    const page = Number(this.props.page);
    const total = 10; // max limit of hnapi
    return (
      <div className="pagination content" style={{lineHeight: "1"}}>
        {page > 1 &&
          <Link 
            to={this.prevUrl} 
            onClick={() => scrollToTop()}
            style={{marginRight: "0.5rem"}}
          >
            prev
          </Link>
        }
        <span>&nbsp;{page || 1} / {total}&nbsp;</span>
        {page !== total &&
          <Link 
            to={this.nextUrl} 
            onClick={() => scrollToTop()}
            style={{marginLeft: "0.5rem"}}
          >
            more
          </Link>
        }
      </div>
    );
  }
}

export default Pagination;