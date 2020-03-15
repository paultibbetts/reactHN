import React from 'react';

interface NoMatchProps {
  location: {
    pathname: string
  }
}

const NoMatch = ({ location }: NoMatchProps) => (
  <h1>Nothing was found for {location.pathname}</h1>
);

export default NoMatch;