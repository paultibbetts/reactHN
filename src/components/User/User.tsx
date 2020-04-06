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
      <div className="bg-white p-4">
        <h1 className="text-2xl font-bold mb-3">{data.id}</h1>
        <div className="mb-3">
          <div>
            <span className="font-bold">Created:</span>&nbsp;
            {data.created}
          </div>
          <div>
            <span className="font-bold">Karma:</span>&nbsp;
            {data.karma} {renderRating(data.karma)}
          </div>
        </div>
        <div dangerouslySetInnerHTML={renderMarkup(data.about)} />
      </div>
    );
  }

  return (
    <div>
      {props.isFetching 
        ? <Loading /> 
        : renderUser(props.user)
      }
    </div>
  );
}