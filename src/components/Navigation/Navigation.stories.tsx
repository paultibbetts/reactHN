import React from 'react';
import { Navigation } from './Navigation';

export default {
    component: Navigation,
    title: 'Navigation',
    excludeStories: /.*Data$/
}

export const Default = () => (
    <Navigation />
);