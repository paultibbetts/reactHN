
import { addDecorator, addParameters } from '@storybook/react';
import { withMemoryRouter } from './decorators/memoryRouter'
import { withPlayroom } from 'storybook-addon-playroom';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles.css';

addDecorator(withPlayroom);
addDecorator(withMemoryRouter);

addParameters({
  playroom: {
    url: process.env.NODE_ENV === 'production' ? '/playroom/' : undefined,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});