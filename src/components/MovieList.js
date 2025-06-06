import React from "react";
import Movie from "./Movie";

function MovieList({ movies, OnSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} OnSelectMovie={OnSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
