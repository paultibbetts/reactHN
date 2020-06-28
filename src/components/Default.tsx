import React from 'react';
import { Redirect } from 'react-router-dom';

const Default: React.FC = () => (
  <Redirect to="/news" />
);

export default Default;