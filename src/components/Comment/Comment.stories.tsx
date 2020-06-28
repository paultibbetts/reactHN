import React from 'react';
import { Comment } from './Comment';
import { Comment as CommentModel } from '../../services/node-hnapi';

export default {
    component: Comment,
    title: 'Comment',
    excludeStories: /.*Data$/,
}

export const commentData: CommentModel = {
    id: 1,
    level: 0,
    user: 'test',
    time: 123,
    time_ago: '4 hours ago',
    content: '<p>I think this is great!</p>',
    comments: []
}

export const Default = () => <Comment data={commentData} />

export const subCommentData = {
    ...commentData,
    comments: [
        {
            id: 2,
            level: 1,
            user: 'responder',
            time: 456,
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

export const WithCodeBlock = () => (
    <Comment
        data={{
            ...commentData,
            content: '<p><pre><code>echo "Hello World!!1"</code></pre></p>'
        }}
    />
);