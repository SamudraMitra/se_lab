import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Employee = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //fetch inventory data from backend
    if (localStorage.getItem("key") !== "employee") {
      navigate("/forbidden");
    }
  }, []);
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/getinventory",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setInventory(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <ul>
          {inventory.map((e, key) => {
            return (
              <div className="mb-5" key={key}>
                <li>
                  code: {e.code} quantity: {e.qty}
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
              </div>
            );
          })}
        </ul>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={(e) => {
            e.preventDefault();

            let data = inventory;

            let config = {
              method: "post",
              maxBodyLength: Infinity,
              url: "http://localhost:8000/employeechange",
              headers: {},
              data: data,
            };

            axios
              .request(config)
              .then((response) => {
                // console.log(JSON.stringify(response.data));
                navigate("/employee");
              })
              .catch((error) => {
                console.log(error);
              });

            // console.log(inventory);
            //send inventory to backend
          }}
        >
          Update Inventory
        </button>
      </div>
      <button
        class="ml-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={(e) => {
          e.preventDefault();
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Employee;
