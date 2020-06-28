import React from 'react';
import { User } from './User';

export default {
    component: User,
    title: 'User',
    excludeStories: /.*Data$/
}

const userData = {
    id: 'Tester',
    created_time: new Date().getTime(),
    created: 'just now',
    karma: 0,
    about: '<p>Storybook user</p>',
    avg: null
}

export const New = () => (
    <User
        user={{
            ...userData,
            id: 'New user',
            about: '<p>I\'m new here</p>'
        }}
        isFetching={false}
    />
)

export const BadKarma = () => (
    <User
        user={{
            ...userData,
            id: 'Poopy head',
            karma: -1,
            about: '<p>Downvotes everything</p>'
        }}
        isFetching={false}
    />
)

export const GoodKarma = () => (
    <User
        user={{
            ...userData,
            karma: 1
        }}
        isFetching={false}
    />
)

export const ReallyGoodKarma = () => (
    <User
        user={{
            ...userData,
            karma: 100
        }}
        isFetching={false}
    />
)

export const GreatKarma = () => (
    <User
        user={{
            ...userData,
            karma: 1000
        }}
        isFetching={false}
    />
)