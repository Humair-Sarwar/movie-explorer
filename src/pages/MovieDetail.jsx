import React, { useEffect, useState } from "react";
import image from "../assets/Laughter-Chefs-–-Unlimited-Entertainment-2024-Google-Drive-Download.jpg";
import { useParams } from "react-router";

const MovieDetail = ({ switchColor }) => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const getMovie = async () => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=6b5def61&i=${id}`);
    const data = await res.json();
    setMovie(data);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  if (!movie) return <p>Loading...</p>;
  return (
    <div
      className={`min-h-screen ${
        switchColor ? "bg-[#282929]" : "bg-[#f3f3f3]"
      } transition duration-800`}
    >
      <div className="relative h-[470px] flex justify-center bg-(--dracula-background-000000,#0d0d0d)">
        <div className="relative">
          <img src={movie?.Poster} alt="" className="h-[470px]" />
          <div
            class="absolute top-0 left-0 h-full w-[20%]
            bg-[linear-gradient(to_right,var(--dracula-background-000000,#0d0d0d)_0px,var(--dracula-background-00000000,rgba(13,13,13,0))_100%)]
            z-10 pointer-events-none"
          ></div>
          <div
            class="absolute top-0 right-0 h-full w-[20%]
            bg-[linear-gradient(to_left,var(--dracula-background-000000,#0d0d0d)_0px,var(--dracula-background-00000000,rgba(13,13,13,0))_100%)]
            z-10 pointer-events-none"
          ></div>
        </div>
        {/* Gradient overlay using a div */}
      </div>
      <div
        className={`${
          switchColor ? "bg-[#282929]" : "bg-[#f3f3f3]"
        } transition duration-800`}
      >
        <div className="max-w-[1100px] px-3! mx-auto! py-3!">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <div
                className={`${
                  switchColor ? "bg-[#242525]" : "bg-white"
                } transition duration-800 rounded-[11px] py-8! px-10! shadow-[var(--dracula-background-0000004d,rgba(13,13,13,0.3))_0px_4px_8px_0px] relative top-0 md:top-[-55px] z-20`}
              >
                <div className="flex gap-1">
                  <div className="text-[#dbd7d0] uppercase text-[10px] cursor-pointer transition duration-300 py-1! px-2! rounded-4xl bg-[#197dba] hover:bg-(--dracula-background-00000059,rgba(13,13,13,0.35)) font-bold">
                    <p>{movie?.Director}</p>
                  </div>
                  <div className="text-[#dbd7d0] uppercase text-[10px] cursor-pointer transition duration-300 py-1! px-2! rounded-4xl bg-[#197dba] hover:bg-(--dracula-background-00000059,rgba(13,13,13,0.35)) font-bold">
                    <p>{movie?.Released}</p>
                  </div>
                  <div className="text-[#dbd7d0] uppercase text-[10px] cursor-pointer transition duration-300 py-1! px-2! rounded-4xl bg-[#4c8a49] hover:bg-(--dracula-background-00000059,rgba(13,13,13,0.35)) font-bold">
                    <p>{movie?.Language}</p>
                  </div>
                </div>

                <h3
                  className={`${
                    switchColor ? "text-[#dbd7d0]" : "text-black"
                  } text-[30px] my-3! font-medium hover:text-blue-500 transition duration-300`}
                >
                  {movie?.Title}
                </h3>
                <div className="flex gap-3 mt-5!">
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
                    <span>{movie?.Released}</span>
                  </div>
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
                        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.964 9.964 0 01-4.879-1.366L3 21l1.366-4.879A9.964 9.964 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>

                    <span>{movie?.Metascore} comments</span>
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
                    <span>{movie?.imdbRating}K views</span>
                  </div>
                </div>

                <p className="text-[#aea598] text-[15px] font-semibold mt-6!">
                  {movie?.Plot}
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div
                className={`${
                  switchColor ? "bg-[#242525]" : "bg-white"
                } transition duration-800 rounded-[11px] p-5! shadow-[var(--dracula-background-0000004d,rgba(13,13,13,0.3))_0px_4px_8px_0px] relative top-0 md:top-4 z-20`}
              >
                <h3
                  className={`${
                    switchColor ? "text-[#dbd7d0]" : "text-black"
                  } text-[18px] font-medium hover:text-blue-500 transition duration-300`}
                >
                  Categories
                </h3>
                <ul>
                  <li
                    className={`flex justify-between items-center text-[15px] py-4! transition duration-800 border-b ${
                      switchColor ? "border-gray-700" : "border-gray-300"
                    }`}
                  >
                    <span className="text-blue-400 font-bold">
                      List Collection
                    </span>{" "}
                    <span className="text-[#aea598]">(7)</span>
                  </li>

                  <li className="flex justify-between items-center text-[15px] py-4!">
                    <span className="text-blue-400 font-bold">Movies</span>{" "}
                    <span className="text-[#aea598]">(4,997)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
