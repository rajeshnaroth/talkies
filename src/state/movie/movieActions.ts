import { getMovies } from "../../api/theMovieDB";
import { REFRESH } from "./movieReducer";

export default function useActions(dispatch) {
  // const movies = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];
  async function refresh() {
    const movies = await getMovies();
    dispatch({ data: movies, type: REFRESH });
  }

  return { refresh };
}
