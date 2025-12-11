import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const Home = ({ search, switchColor }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMovies = async (query) => {
    setLoading(true);
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=6b5def61&s=${query}`
    );
    const data = await res.json();
    setMovies(data.Search || []);
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies(search || "Fast");
  }, [search]);
  return (
    <div
      className={`${
        switchColor ? "bg-[#282929]" : "bg-[#f3f3f3]"
      } min-h-screen transition duration-800`}
    >
      <div className="flex justify-between items-center max-w-[1200px] px-3! mx-auto! py-3!">
        <MovieList
          movies={movies}
          loading={loading}
          switchColor={switchColor}
        />
      </div>
    </div>
  );
};

export default Home;
