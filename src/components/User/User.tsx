import React from 'react';

import { renderMarkup } from '../../helpers';
import { User as UserModel } from '../../services/node-hnapi';

import Loading from '../../components/Loading';

interface Props {
  user: UserModel,
  isFetching: boolean
}

export const User = (props: Props) => {

  const getRating = (karma: number): { label: string; icon: string } => {
    const length = karma.toString().length;
    if (karma > 100) {
      return { label: 'great rating', icon: '🔥'.repeat(length) };
    } else if (karma < 0) {
      return { label: 'bad rating', icon: '💩'.repeat(length - 1) };
    } else if (karma === 0 || !karma) {
      return { label: 'new user', icon: '🆕' };
    }
    return { label: 'good rating', icon: '👍'.repeat(length) };
  }

  const renderRating = (karma: number) => {
    if (karma === undefined) return;
    const rating = getRating(karma);
    return (
      <span
        role="img"
        aria-label={`${rating.label}`}
        title={rating.label}
      >
        {rating.icon}
      </span>
    );
  }

  const renderUser = (data: UserModel) => {
    return (
      <div className="content">
        <h1 className="single__title">{data.id}</h1>
        <div>
          <strong>Created:</strong>&nbsp;
          {data.created}
        </div>
        <div>
          <strong>Karma:</strong>&nbsp;
          {data.karma} {renderRating(data.karma)}
        </div>
        <div dangerouslySetInnerHTML={renderMarkup(data.about)} />
      </div>
    );
  }

  return (
    <div className="container">
      {props.isFetching 
        ? <Loading /> 
        : renderUser(props.user)
      }
    </div>
  );
}