import { setupWorker } from 'msw/browser';
import { authHandler } from '../Auth.handlers';
import { productHandler } from '../Product.handlers';

export const browser = setupWorker(...authHandler, ...productHandler);
