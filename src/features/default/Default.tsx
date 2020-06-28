import React from 'react';
import { Redirect } from 'react-router-dom';

export const DefaultFeature: React.FC = () => (
  <Redirect to="/news/1" />
)