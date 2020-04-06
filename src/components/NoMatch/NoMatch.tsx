import React from 'react';

interface INoMatchProps {
  location: {
    pathname: string
  }
}

export const NoMatch = ({ location }: INoMatchProps) => (
  <h1 className="font-bold text-2xl">Nothing was found for "{location.pathname}".</h1>
);