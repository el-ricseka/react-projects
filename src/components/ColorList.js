import React, { useState, useEffect } from "react";

const ColorList = ({ hexColor, rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);

  const bgc = rgb.join();
  const hex = `#${hexColor}`;

  useEffect(() => {
    const timeout = setInterval(() => {
      setAlert(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [hex]);
  return (
    <>
      <div
        className={`${
          index > 7 ? "text-white" : "text-gray-900"
        } cursor-pointer flex flex-col leading-tight items-center justify-center text-center h-48`}
        style={{ backgroundColor: `rgb(${bgc})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hex);
        }}
      >
        <p>{weight}%</p>
        <p>{hex}</p>
        {alert && (
          <p className="mt-4 border py-1 px-4 font-semibold">
            copied to clipboard!
          </p>
        )}
      </div>
    </>
  );
};

export default ColorList;
