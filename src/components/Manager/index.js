import React, { useEffect, useState } from "react";

const Manager = () => {
  useEffect(() => {
    //fetch inventory data from backend
  }, []);
  const [inventory, setInventory] = useState([
    { code: "A001", qty: 10, price: 2.99 },
    { code: "B002", qty: 5, price: 1.49 },
    { code: "C003", qty: 20, price: 5.99 },
    { code: "D004", qty: 8, price: 3.79 },
    { code: "E005", qty: 15, price: 4.49 },
  ]);
  return (
    <div>
      <ul>
        {inventory.map((e, key) => {
          return (
            <div className="mb-5" key={key}>
              <li>
                code: {e.code} quantity: {e.qty} price:{e.price}
              </li>
              <input
                className="border-black border-2 mr-5"
                placeholder="new qty"
                onChange={(e) => {
                  let temp = inventory;
                  temp[key].qty = e.target.value;
                  setInventory(temp);
                }}
              />
              <input
                className="border-black border-2 mr-5"
                placeholder="new price"
                onChange={(e) => {
                  let temp = inventory;
                  temp[key].price = e.target.value;
                  setInventory(temp);
                }}
              />
            </div>
          );
        })}
      </ul>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={(e) => {
          e.preventDefault();
          console.log(inventory);
          //send inventory to backend
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Manager;
