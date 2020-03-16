import React from 'react';

interface INoMatchProps {
  location: {
    pathname: string
  }
}

const NoMatch = ({ location }: INoMatchProps) => (
  <h1>Nothing was found for {location.pathname}</h1>
);

export default NoMatch;