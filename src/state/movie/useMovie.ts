import { useReducer } from "react";
import { withMiddleware } from "../middleware";
import { pLogger, qLogger } from "../middleware/samples";
import useMovieActions from "./movieActions";
import movieReducer from "./movieReducer";

export default function useEntity() {
  const [list, dispatch] = useReducer(movieReducer, []);
  // optional middleware wrapped dispatch
  const wrappedDispatch = withMiddleware(list, dispatch)(pLogger, qLogger);
  const { refresh } = useMovieActions(wrappedDispatch);

  return {
    actions: { refresh },
    data: list,
  };
}
