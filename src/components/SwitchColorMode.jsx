import React from "react";

const SwitchColorMode = ({ handleSwitchMode, switchColor }) => {
  return (
    <div
      onClick={handleSwitchMode}
      className={`fixed z-40 bottom-8 left-8 transition shadow-[var(--dracula-background-0000004d,rgba(13,13,13,0.3))_0px_4px_8px_0px] duration-800 ${
        switchColor ? "bg-[#444]" : "bg-[#eee]"
      } p-2! rounded-md w-10 h-10 flex justify-center items-center text-white cursor-pointer`}
    >
      {switchColor ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`relative inset-0 h-6 w-6 text-white transition-opacity duration-500 ${
            switchColor ? "opacity-100" : "opacity-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`relative inset-0 h-6 w-6 text-black transition-opacity duration-500 ${
            switchColor ? "opacity-0" : "opacity-100"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2M12 19v2M3 12h2M19 12h2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414"
          />
          <circle
            cx="12"
            cy="12"
            r="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default SwitchColorMode;
