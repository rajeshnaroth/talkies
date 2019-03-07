import { getJson } from "../helper";

const API_KEY = `${process.env.REACT_APP_MOVIEDB_API_KEY}`;
const serviceEndPoint = "https://api.themoviedb.org/3";
const apiUrl = (urlPath) => `${serviceEndPoint}${urlPath}&api_key=${API_KEY}`;

async function getApiResults(url) {
  const response = await fetch(apiUrl(url));
  const data = await response.json();
  return data.results.map((m) => ({
    ...m,
    poster_path: `http://image.tmdb.org/t/p/w154${m.poster_path}`,
  }));
}

export async function getConfiguration() {
  return getJson(apiUrl("/configuration?"));
}

export function getMovies() {
  return getApiResults(
    "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22",
  );
}
