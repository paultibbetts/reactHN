import React from 'react';
import { Collection } from './Collection';
import { defaultStoryData } from '../Story/Story.stories';

export default {
    component: Collection,
    title: 'Collection',
    excludeStories: /.*Data$/,
}

const collectionData = [
    defaultStoryData,
    defaultStoryData,
    defaultStoryData,
    defaultStoryData,
    defaultStoryData
];

export const Default = () => (
    <Collection
        type='news'
        collection={collectionData}
        isFetching={false}
        path=":page?"
        page={1}
    />
)

export const IsFetching = () => (
    <Collection
        type='news'
        collection={collectionData}
        isFetching={true}
        path=":page?"
        page={1}
    />
)