import React from "react";
import styled from "styled-components";
import { Movie } from "./index";

function MovieList({ className, movieList }) {
  return (
    <div className={className}>
      {movieList.map(m => (
        <Movie key={m.id} {...m} />
      ))}
    </div>
  );
}

export default styled(MovieList)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
