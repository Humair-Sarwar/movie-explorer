import React from "react";

const Skelton = ({ switchColor }) => {
  return (
    <div
      className={`${
        switchColor ? "bg-[#242525]" : "bg-white"
      } rounded-[13px] overflow-hidden shadow-[var(--dracula-background-0000004d,rgba(13,13,13,0.3))_0px_4px_8px_0px] animate-pulse`}
    >
      {/* Image Placeholder */}
      <div
        className={`${
          switchColor ? "bg-gray-600" : "bg-gray-300"
        } relative h-[210px]`}
      ></div>

      {/* Title Placeholder */}
      <div className="p-5!">
        <div
          className={`${
            switchColor ? "bg-gray-600" : "bg-gray-300"
          } h-4  rounded w-full mb-2`}
        ></div>
      </div>

      {/* Info Row Placeholder */}
      <div className="flex gap-3 px-5! pb-5!">
        <div
          className={`${
            switchColor ? "bg-gray-600" : "bg-gray-300"
          } flex-1 h-3 rounded`}
        ></div>
        <div
          className={`${
            switchColor ? "bg-gray-600" : "bg-gray-300"
          } flex-1 h-3 rounded`}
        ></div>
      </div>
    </div>
  );
};

export default Skelton;
