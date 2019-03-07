import { useReducer } from "react";

import useMovieActions from "./movieActions";
import movieReducer from "./movieReducer";

export default function useEntity() {
  const [list, dispatch] = useReducer(movieReducer, []);
  const { refresh } = useMovieActions(dispatch);

  return {
    actions: { refresh },
    data: list,
  };
}
