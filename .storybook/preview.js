
import '../src/index.css';
import { addDecorator } from '@storybook/react';
import { withMemoryRouter } from './decorators/memoryRouter'

addDecorator(withMemoryRouter)