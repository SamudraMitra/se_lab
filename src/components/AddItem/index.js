import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = ({ onAddItem }) => {
  const [itemCode, setItemCode] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("key") !== "manager") {
      navigate("/forbidden");
    }
  }, []);
  const handleAddItem = () => {
    if (itemCode && price && quantity) {
      //   const newItem = {
      //     itemCode,
      //     price: parseFloat(price),
      //     quantity: parseInt(quantity, 10),
      //   };
      const BACKEND_URL =
        process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";
      let data = JSON.stringify({
        code: itemCode,
        price: parseFloat(price),
        qty: parseInt(quantity),
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${BACKEND_URL}/additem`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          alert(response.data.message);
          // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
      //   onAddItem(newItem);

      setItemCode("");
      setPrice("");
      setQuantity("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Add Item to Inventory
      </h2>
      <label className="block mb-2">
        Item Code:
        <input
          type="text"
          value={itemCode}
          onChange={(e) => setItemCode(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </label>
      <br />
      <label className="block mb-2">
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </label>
      <br />
      <label className="block mb-2">
        Quantity:
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </label>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddItem();
        }}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600 cursor-pointer"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
