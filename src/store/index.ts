import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './root-reducer';
import { createAPI } from '../services/api';
import { redirectRouteMiddleware } from './middleware/redirect-route';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirectRouteMiddleware)
});
