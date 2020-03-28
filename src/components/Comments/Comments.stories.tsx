import React from 'react';
import { Comments } from './Comments';
import { commentData, subCommentData } from '../Comment/Comment.stories';
import { Comment } from '../../services/node-hnapi';

export default {
    component: 'Comments',
    title: 'Comments',
    excludeStories: /.*Data$/,
};

export const defaultCommentsData: Comment[] = [
    {
        ...commentData,
        user: 'Wordsworth',
        time_ago: '17 seconds ago',
        content: '<p>What a wonderful use of words</p>',
        comments: []
    },
    { 
        ...commentData,
        user: 'h8r',
        time_ago: '1 minute ago',
        content: '<p>this sux!</p>',
        comments: []
    },
];

export const Default = () => <Comments data={defaultCommentsData} />;

export const WithSubComments = () => (
    <Comments
        data={defaultCommentsData.concat(subCommentData)}
    />
)