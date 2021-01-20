import React, { useEffect } from "react";

const Alert = ({ mgs, type, show, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [list]);

  return (
    <>
      <h2
        className={`bg-${type}-100 text-center  text-gray-500 rounded-full mb-3`}
      >
        {mgs}
      </h2>
    </>
  );
};

export default Alert;
