import React, { useState, useEffect } from "react";
import { Reviews } from "../data";
import ChevronLeft from "../components/Chevron-left";
import ChevronRight from "../components/Chevron-right";
import SliderItem from "../components/SliderItem";

const Slider = () => {
  const [items, setItems] = useState(Reviews);
  const [index, setIndex] = useState(0);
  const personLength = items.length;

  useEffect(() => {
    const lastIndex = items.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, items]);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex(index + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  const next = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  const prev = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  const item = items.map((item, personIndex) => {
    return (
      <SliderItem
        key={item.id}
        {...item}
        personIndex={personIndex}
        stateIndex={index}
        personLength={personLength}
      />
    );
  });

  return (
    <div className="flex h-screen bg-indigo-100">
      <div className="w-1/2 flex m-auto items-center">
        <ChevronLeft prev={prev} />
        <div className="relative flex w-full h-400 overflow-hidden">{item}</div>
        <ChevronRight next={next} />
      </div>
    </div>
  );
};

export default Slider;
