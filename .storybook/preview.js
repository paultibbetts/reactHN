
import '../src/index.css';
import { addDecorator, addParameters } from '@storybook/react';
import { withMemoryRouter } from './decorators/memoryRouter'
import { withPlayroom } from 'storybook-addon-playroom';

addDecorator(withPlayroom);

addDecorator(withMemoryRouter);

addParameters({
  playroom: {
    url: process.env.NODE_ENV === 'production' ? '/playroom/' : undefined,
  },
});