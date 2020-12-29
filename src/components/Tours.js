import React, { useState } from "react";

const Tours = ({ id, name, info, price, image, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="flex flex-col bg-white shadow-lg mb-4 transition duration-500 ease-in-out">
        <div className="relative pb-1/2">
          <img
            className="absolute h-full w-full object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-6">
          <div className="flex items-baseline">
            <span className="font-semibold inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase">
              New
            </span>
            <div className="ml-2 text-gray-400 uppercase text-sm tracking-wide font-semibold">
              3 beds &bull; 2 baths
            </div>
          </div>

          <h4 className="font-semibold text-2xl leading-tight truncate mt-3">
            {name}
          </h4>
          <div className="mt-1">
            <span className="font-semibold text-gray-500">$ {price}</span>
            <span className="text-gray-600 text-sm"> / wk </span>
          </div>

          <div className="mt-4 text-md text-gray-400 leading-snug">
            {readMore ? info : info.substring(0, 160) + "..."}
            &nbsp;
            <span>
              <button
                className="font-semibold text-sm text-indigo-500 focus:outline-none"
                type="button"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Show Less" : "Read More"}
              </button>
            </span>
          </div>

          <button
            className="text-red-500 border border-red-500 rounded py-1 w-full mt-5 focus:outline-none hover:bg-red-500 hover:border-none hover:text-white
          transition duration-400 ease-in-out"
            onClick={(e) => deleteTour(id)}
          >
            Not Intrested
          </button>
        </div>
      </div>
    </>
  );
};

export default Tours;
