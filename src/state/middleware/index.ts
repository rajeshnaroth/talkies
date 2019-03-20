import { compose } from "ramda";

export const withMiddleware = (state, dispatch) => (...middlewares) =>
  compose(...middlewares.map(m => m(state)))(dispatch);
