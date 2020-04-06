import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/styles.css';

export default (props) => {
    const { children } = props;
    return (
        <MemoryRouter>{children}</MemoryRouter>
    );
}