import React from 'react';
import { Story } from './Story';

import { defaultCommentsData } from '../Comments/Comments.stories';

export default {
    component: Story,
    title: 'Story',
    excludeStories: /.*Data$/
}

const domain = 'example.test';

export const defaultStoryData = {
    id: 1,
    title: 'How Storybook helps you build React apps',
    domain,
    points: 42,
    user: 'tester',
    time: new Date().getTime(),
    time_ago: '17 seconds ago',
    type: 'news',
    comments_count: defaultCommentsData.length,
    url: `https://${domain}/content`
}
export const Default = () => (
    <Story
        index={0}
        data={defaultStoryData}
        page={'1'}
        perPage={30}
    />
);

export const visitedItemData = {
    ...defaultStoryData,
    url: 'http://localhost:9009'
};

export const Visited = () => (
    <Story
        index={0}
        data={visitedItemData}
        page={'1'}
        perPage={30}
    />
)