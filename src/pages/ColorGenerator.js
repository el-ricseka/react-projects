import React, { useState, useRef, useEffect } from "react";
import ColorList from "../components/ColorList";
import Values from "values.js";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#c4302b").all(10));
  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const values = list.map((item, index) => (
    <ColorList key={index} {...item} hexColor={item.hex} index={index} />
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <header className="flex shrink-0 items-center h-16 bg-white shadow-lg px-8 border-b border-gray-200">
          <h1 className="font-extrabold text-2xl text-indigo-500">
            ErColor Generator
          </h1>
          <form className="flex-1 pl-12" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
              className={`${
                error && "border-red-500"
              } py-2 tracking-wide px-4 font-semibold text-gray-700 w-1/4 border border-gray-300 rounded-l focus:outline-none focus:border-indigo-500`}
              placeholder="#c4302b"
            />
            <button
              type="submit"
              className="bg-indigo-500 border rounded-r border-indigo-500 px-8 py-2 text-white text-semibold"
            >
              Submit
            </button>
          </form>
        </header>
        <div className="grid grid-cols-8">{values}</div>
      </div>
    </>
  );
};

export default ColorGenerator;
