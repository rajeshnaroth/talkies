export const pLogger = state => next => action => {
  console.log("pLogger in", state, action);
  next(action);
  console.log("pLogger out");
};

export const qLogger = state => next => action => {
  console.log("qLogger in", state, action);
  next(action);
  console.log("qLogger out");
};
