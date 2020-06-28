import React from 'react';
import { NoMatch } from './NoMatch';

export default {
    component: NoMatch,
    title: 'NoMatch',
}

const noMatchData = {
    pathname: 'a page that does not exist'
}

export const Default = () => <NoMatch location={noMatchData}/>;