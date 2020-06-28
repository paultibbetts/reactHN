import React from 'react';
import { Comment } from './Comment';
import { Comment as CommentModel } from '../../services/node-hnapi';

export default {
    component: Comment,
    title: 'Comment',
    excludeStories: /.*Data$/,
}

export const commentData: CommentModel = {
    level: 1,
    user: 'test',
    time_ago: '4 hours ago',
    content: '<p>I think this is great!</p>',
    comments: []
}

export const Default = () => <Comment data={commentData} />

export const subCommentData = {
    ...commentData,
    comments: [
        {
            level: 2,
            user: 'responder',
            time_ago: '2 minutes ago',
            content: '<p>I agree!</p>',
            comments: []
        }
    ]
}

export const WithSubComments = () => (
    <Comment
        data={subCommentData}
    />
)