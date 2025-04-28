import React from "react";
import WatchedMovie from "./WatchedMovie";

function WatchedList({ watched, OnDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbId}
          OnDeleteWatched={OnDeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedList;
