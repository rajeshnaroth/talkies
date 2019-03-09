export const REFRESH = "REFRESH";
const defaultState = [];
export default function movieReducer(list = defaultState, action) {
  switch (action.type) {
    case REFRESH:
      return [].concat(action.data);
    default:
      throw new Error("Unknown action in movieReducer");
  }
}
