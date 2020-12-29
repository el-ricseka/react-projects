import React from "react";

const ChevronRight = ({ next }) => {
  return (
    <>
      <button
        onClick={next}
        className="text-white bg-gray-800 rounded-full p-1 shadow-xl"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
};

export default ChevronRight;
