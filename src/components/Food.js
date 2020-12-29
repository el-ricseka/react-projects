import React from "react";

const Food = ({ img, title, price, desc }) => {
  return (
    <>
      <div className="flex rounded shadow-lg p-4 border border-yellow-600">
        <div className="relative w-5/12 pb-1/3">
          <img
            className="absolute h-full w-full object-cover"
            src={img}
            alt={title}
          />
        </div>
        <div className="flex-1 px-4">
          <div className="flex justify-between border-b pb-2 mb-4 border-gray-300">
            <h2 className="font-bold text-gray-800 text-lg">{title}</h2>
            <span className="font-bold text-yellow-600 text-lg">${price}</span>
          </div>
          <p className="text-gray-500 font-medium leading-snug">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Food;
