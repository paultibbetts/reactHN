import React from 'react';
import { Pagination } from './Pagination';

export default {
    component: Pagination,
    title: 'Pagination',
    excludeStories: /.*Data$/,
}

export const Start = () => (
    <Pagination
        page={'1'}
        type="test"
    />
);

export const Middle = () => (
    <Pagination
        page={'5'}
        type="test"
    />
);

export const End = () => (
    <Pagination
        page={'10'}
        type="test"
    />
);