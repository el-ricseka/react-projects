import React from "react";

const SliderItem = ({
  id,
  name,
  image,
  quote,
  title,
  personIndex,
  stateIndex,
  personLength,
}) => {
  console.log(personLength);
  let position = "nextSlide";

  if (personIndex === stateIndex) {
    position = "activeSlide";
  }
  if (
    personIndex === stateIndex - 1 ||
    (stateIndex === 0 && personIndex === personLength - 1)
  ) {
    position = "lastSlide";
  }
  return (
    <>
      <div
        className={`${position} text-center px-8 absolute top-0 bottom-0 w-full h-full opacity-0`}
      >
        <img
          className="h-36 w-36 object-cover rounded-full mx-auto border-white border-4 shadow-lg"
          src={image}
          alt={name}
        />
        <h2 className="uppercase text-red-700 tracking-wider font-semibold text-lg mt-5">
          {name}
        </h2>
        <p className="font-semibold text-gray-700 mb-6">{title}</p>
        <p className="text-gray-500 font-medium">{quote}</p>
      </div>
    </>
  );
};

export default SliderItem;
