import React from "react";

const GroceryList = ({ id, item, editItem, removeItem }) => {
  return (
    <>
      <div className="flex pb-5 items-center justify-between">
        <h2 className="font-semibold text-gray-500">{item}</h2>
        <div>
          <span>
            <button
              onClick={() => editItem(id)}
              className="hover:bg-green-200 focus:outline-none bg-green-100 ml-2 px-4 py-0.5 rounded shadow"
            >
              Edit
            </button>
          </span>
          <span>
            <button
              onClick={() => removeItem(id)}
              className="hover:bg-red-200 focus:outline-none bg-red-100 ml-2 px-4 py-0.5 rounded shadow"
            >
              Delete
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default GroceryList;
