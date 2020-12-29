import React, { useState } from "react";
import PlusIcon from "./PlusIcon";
import MinusIcon from "./IconMinus";

const Button = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="rounded border border-gray-200 px-4 py-3 shadow-md mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-800 text-lg font-bold">{question}</h2>
          <button
            className="inline-block rounded-full bg-gray-100 text-red-500 w-8 h-8 p-1 focus:outline-none"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? <MinusIcon /> : <PlusIcon />}
          </button>
        </div>
        <div className="pt-4">
          <p className="text-gray-500 font-semibold">{showInfo && answer}</p>
        </div>
      </div>
    </>
  );
};

export default Button;
