import React, { useState, useRef, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import Alert from "../components/Alert";

const getList = localStorage.getItem("list");

const GloceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getList ? JSON.parse(getList) : []);
  const [editId, setEditId] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    mgs: "",
    type: "",
  });
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    setEditId(id);
    setName(item.item);
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, "Please enter a value", "red");
    } else if (name && isEditing) {
      const updatedItem = list.map((item) => {
        if (item.id === editId) {
          return { ...item, item: name };
        }
        return item;
      });

      setList(updatedItem);
      setName("");
      setEditId(null);
      setIsEditing(!isEditing);
      showAlert(true, "Item edited successfully", "yellow");
    } else {
      const newitem = { id: new Date().getTime().toLocaleString(), item: name };
      setList([...list, newitem]);
      setName("");
      showAlert(true, "Item added to the list successfully", "green");
    }
  };

  const removeItem = (id) => {
    const item = list.filter((item) => item.id !== id);
    setList(item);
    showAlert(true, "Item removed from list successfully", "red");
  };

  const showAlert = (show = false, mgs = "", type = "") => {
    setAlert({ show, mgs, type });
  };

  const glist = list.map((item) => (
    <GroceryList
      {...item}
      key={item.id}
      editItem={editItem}
      removeItem={removeItem}
    />
  ));

  const clearList = () => {
    showAlert(true, "Empty List", "red");
    setList([]);
  };

  return (
    <div className="bg-gray-100 h-screen pt-24">
      <div className="w-1/3 mx-auto bg-white shadow-lg p-6">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h2 className="text-center text-gray-700 font-bold text-2xl pb-8">
          Glocery Bud
        </h2>

        <form onSubmit={handleSubmit} className="flex pb-10">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputFocus}
            type="text"
            className="font-semibold text-gray-500 border-t border-b border-l rounded border-gray-300 flex-1 focus:outline-none pl-3"
            placeholder="eg. Eggs"
          />
          <button
            className={`p-2 text-white ${
              isEditing ? "bg-yellow-500" : "bg-gray-600"
            } w-28`}
          >
            {isEditing ? "Edit" : "Add Item"}
          </button>
        </form>

        <div>{glist}</div>

        {(list.length > 0 && list.length) === 1 && (
          <button
            onClick={clearList}
            className="bg-indigo-200 w-full py-0.5 rounded-full my-4 "
          >
            Clear Item
          </button>
        )}

        {list.length > 1 && (
          <button
            onClick={clearList}
            className="bg-indigo-200 w-full py-0.5 rounded-full my-4 "
          >
            Clear Items
          </button>
        )}
      </div>
    </div>
  );
};

export default GloceryBud;
