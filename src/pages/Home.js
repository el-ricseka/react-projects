import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-1/2 mx-auto p-24">
        <h2 className="text-center text-gray-700 font-bold text-3xl pb-12">
          Index of React Projects
        </h2>

        <ul>
          <li className="hover:underline text-gray-500 font-semibold pb-1">
            <Link to="/testimony-slider">&bull; &nbsp;Testimony Slider</Link>
          </li>
          <li className="hover:underline text-gray-500 font-semibold pb-1">
            <Link to="/color-generator">&bull; &nbsp;Color Generator</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
