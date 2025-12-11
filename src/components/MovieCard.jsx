import React from "react";
import { NavLink } from "react-router";
import image from "../assets/Laughter-Chefs-–-Unlimited-Entertainment-2024-Google-Drive-Download.jpg";

const MovieCard = ({ movie, switchColor }) => {
  return (
    <div
      className={`transform hover:scale-90 rounded-[13px] overflow-hidden shadow-[var(--dracula-background-0000004d,rgba(13,13,13,0.3))_0px_4px_8px_0px]
  transition duration-800 ${switchColor ? "bg-[#242525]" : "bg-white"}`}
    >
      <NavLink to={`/movie/${movie?.imdbID}`}>
        <div className="relative h-[210px]">
          <img
            className="filter brightness-80 hover:brightness-70 transition duration-300 w-full h-full object-cover"
            src={movie?.Poster}
            alt=""
          />
          <div className="absolute left-7 top-7 flex gap-2">
            <div className="text-[#dbd7d0] uppercase text-[10px] py-1! px-2! rounded-4xl bg-(--dracula-background-00000059,rgba(13,13,13,0.35)) font-bold">
              <p>{movie?.Type}</p>
            </div>
            <div className="text-[#dbd7d0] uppercase text-[10px] py-1! px-2! rounded-4xl bg-(--dracula-background-00000059,rgba(13,13,13,0.35)) font-bold">
              <p>{movie?.Year}</p>
            </div>
          </div>
        </div>
        <div className="py-5! px-7!">
          <h3
            className={`${
              switchColor ? "text-[#dbd7d0]" : "text-black"
            } line-clamp-3 text-[15px] font-bold hover:text-blue-500 transition duration-300`}
          >
            {movie?.Title}
          </h3>
        </div>
        <div className="flex gap-3 pb-5! px-7!">
          <div className="flex items-center gap-1 text-[#9a9182] font-medium text-[11px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#9a9182] transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>1 day ago</span>
          </div>
          <div className="flex items-center gap-1 text-[#9a9182] font-medium text-[11px] border-b border-dotted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#9a9182] transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>34.9K views</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default MovieCard;
