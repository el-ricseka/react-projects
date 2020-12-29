import React from "react";
import PropTypes from "prop-types";

const Person = ({ name, age, img }) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <img
          className="h-16 w-16 rounded-full object-cover shadow-lg"
          src={img}
          alt="Face ID"
        />

        <div className="ml-4">
          <p className="font-bold text-gray-600 text-md">{name}</p>
          <p className="font-semibold text-gray-400">{age} years</p>
        </div>
      </div>
    </>
  );
};

export default Person;
