import React from "react";
import { Card, CardDetail, CardThumbNail, CardTitle, Page } from "../atoms";

export default function Movie({ poster_path, original_title, overview }) {
  return (
    <Card>
      <CardThumbNail>
        <img src={poster_path} />
      </CardThumbNail>
      <CardTitle>{original_title}</CardTitle>
      <CardDetail>{overview}</CardDetail>
    </Card>
  );
}
