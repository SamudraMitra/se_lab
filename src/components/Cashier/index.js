import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cashier = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const [list, setList] = useState([]);
  const [displayitems, setDisplayItems] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("key") !== "cashier") {
      navigate("/forbidden");
    }
  }, []);
  useEffect(() => {
    setDisplayItems(list);
  }, [list]);
  const [codeval, setCodeVal] = useState("");
  const [qtyval, setQtyVal] = useState("");
  useEffect(() => {
    setCodeVal(item.code);
    setQtyVal(item.qty);
  }, [item]);
  return (
    <>
      <div>
        <ul>
          {displayitems.map((e, key) => (
            <li key={key}>
              item code: {e.code}, item qty: {e.qty}
            </li>
          ))}
        </ul>
        <form>
          <input
            className="border-black border-2 mr-5"
            type="text"
            name="code"
            value={codeval}
            placeholder="Add item code"
            onChange={(e) => {
              setItem({ ...item, code: e.target.value });
            }}
          />
          <input
            className="border-black border-2 mr-5"
            type="text"
            name="qty"
            value={qtyval}
            placeholder="Add item qty"
            onChange={(e) => {
              setItem({ ...item, qty: e.target.value });
            }}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              setList([...list, item]);
              setItem("");
              setCodeVal("");
              setQtyVal("");
            }}
          >
            Add
          </button>
        </form>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={(e) => {
            e.preventDefault();
            console.log(displayitems);
            let data = displayitems;

            let config = {
              method: "post",
              maxBodyLength: Infinity,
              url: "http://localhost:8000/bill",
              headers: {},
              data: data,
            };

            axios
              .request(config)
              .then((response) => {
                console.log(JSON.stringify(response.data));
                // setInventory(response.data.items);
                setDisplayItems([]);
                navigate("/cashier");
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Submit
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

export default Cashier;
