import React from 'react';
import { Item } from './Item';

import { defaultStoryData } from '../Story/Story.stories';
import { defaultCommentsData } from '../Comments/Comments.stories';

export default {
    component: Item,
    title: 'Item',
    excludeStories: /.*Data$/,
}

const itemData = {
    ...defaultStoryData,
    content: '<p>Isolated components</p>',
    comments: defaultCommentsData,
    comments_count: defaultCommentsData.length
}

export const Default = () => (
    <Item
        item={itemData}
        isFetching={false}
    />
);

export const Fetching = () => (
    <Item
        item={itemData}
        isFetching={true}
    />
);

const noContentItemData = {
    ...itemData,
    content: ''
}
export const NoContent = () => (
    <Item
        item={noContentItemData}
        isFetching={false}
    />
)

const noCommentItemData = {
    ...itemData,
    comments: [],
    comments_count: 0
}
export const NoComments = () => (
    <Item
        item={noCommentItemData}
        isFetching={false}
    />
)