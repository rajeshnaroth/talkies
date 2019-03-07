export const REFRESH = "REFRESH";

export default function movieReducer(list, action) {
  switch (action.type) {
    case REFRESH:
      return [].concat(action.data);
    default:
      throw new Error("Unknown action in movieReducer");
  }
}
