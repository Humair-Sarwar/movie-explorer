import React from "react";
import MovieCard from "./MovieCard";
import Skelton from "./Skelton";

const MovieList = ({ movies, loading, switchColor }) => {
  if (loading) {
    return (
      <>
        <div className="grid grid-cols-1 gap-8 w-full my-4! md:grid-cols-3 sm:grid-cols-2">
          <Skelton switchColor={switchColor} />
          <Skelton switchColor={switchColor} />
          <Skelton switchColor={switchColor} />
        </div>
      </>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-8 w-full my-4! md:grid-cols-3 sm:grid-cols-2">
      {movies?.length == 0 ? (
        <p
          className={`${
            switchColor ? "text-white" : "text-black"
          } transition duration-800 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          No movies found!
        </p>
      ) : (
        movies?.map((movie) => (
          <MovieCard
            switchColor={switchColor}
            key={movie?.imdbID}
            movie={movie}
          />
        ))
      )}
    </div>
  );
};

export default MovieList;
