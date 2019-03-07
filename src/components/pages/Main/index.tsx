import React, { useEffect } from "react";

import useMovie from "../../../state/movie/useMovie";
import { Page } from "../../atoms";
import { Title } from "../../molecules";
import { MovieList } from "../../organisms";

// const movies = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];
export default function Main() {
  const {
    data: movieList,
    actions: { refresh },
  } = useMovie();

  useEffect(() => {
    refresh();
  }, []);

  return (
    <Page>
      <Title />
      <MovieList {...{ movieList }} />
    </Page>
  );
}
