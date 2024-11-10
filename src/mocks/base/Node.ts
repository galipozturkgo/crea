import { setupServer } from 'msw/node';
import { authHandler } from '../Auth.handlers';
import { productHandler } from '../Product.handlers';

export const server = setupServer(...authHandler, ...productHandler);
