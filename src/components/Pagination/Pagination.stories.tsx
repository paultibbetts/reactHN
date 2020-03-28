import React from 'react';
import { Pagination } from './Pagination';

export default {
    component: Pagination,
    title: 'Pagination',
    excludeStories: /.*Data$/,
}

export const defaultPaginationData = {
    page: '1',
    type: 'test'
};

export const Start = () => (
    <Pagination {...defaultPaginationData} />
);

export const Middle = () => (
    <Pagination {...defaultPaginationData} page={'5'} />
);

export const End = () => (
    <Pagination {...defaultPaginationData} page={'10'} />
);