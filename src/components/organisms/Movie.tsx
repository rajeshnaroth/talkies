import React from "react";
import styled from "styled-components";
import { CardLayout } from "../molecules";

function Movie({ className, poster_path, original_title, overview }) {
  return (
    <div className={className}>
      <CardLayout
        title={original_title}
        details={overview}
        imageUrl={poster_path}
      />
    </div>
  );
}
export default styled(Movie)`
  width: 20%;
`;
