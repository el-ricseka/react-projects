import React from "react";

const ChevronLeft = ({ prev }) => {
  return (
    <>
      <button
        onClick={prev}
        className="text-white bg-gray-800 rounded-full p-1 shadow-xl"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </>
  );
};

export default ChevronLeft;
