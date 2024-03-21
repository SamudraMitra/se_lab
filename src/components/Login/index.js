import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [cashierdetails, setCashierDetails] = useState({});
  const [employeedetails, setEmployeeDetails] = useState({});
  const [managerdetails, setManagerDetails] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("key") === "cashier") {
      navigate("/cashier");
    } else if (localStorage.getItem("key") === "manager") {
      navigate("/manager");
    }
    if (localStorage.getItem("key") === "employee") {
      navigate("/employee");
    }
  });
  return (
    <div>
      <div className="cashier_login mb-10">
        <p>CASHIER LOGIN</p>
        <form>
          <input
            className="border-black border-2 mr-5"
            placeholder="email"
            value={cashierdetails?.email}
            onChange={(e) => {
              setCashierDetails({ ...cashierdetails, email: e.target.value });
              console.log(cashierdetails?.email);
            }}
          />
          <input
            className="border-black border-2"
            type="password"
            placeholder="password"
            value={cashierdetails?.password}
            onChange={(e) => {
              setCashierDetails({
                ...cashierdetails,
                password: e.target.value,
              });
              console.log(cashierdetails);
            }}
          />
          <button
            type="submit"
            className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              let data = JSON.stringify({
                email: cashierdetails.email,
                password: cashierdetails.password,
              });

              let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:8000/cashierlogin",
                headers: {
                  "Content-Type": "application/json",
                },
                data: data,
              };
              axios
                .request(config)
                .then((response) => {
                  if (response.status === 200) {
                    localStorage.setItem("key", "cashier");
                    navigate("/cashier");
                  } else {
                    alert(response?.data?.message);
                  }
                })
                .catch((error) => {
                  alert(error.response.data.message);
                });
            }}
          >
            Login
          </button>
        </form>
      </div>
      <div className="employee_login mb-10">
        <p>EMPLOYEE LOGIN</p>
        <form>
          <input
            className="border-black border-2 mr-5"
            placeholder="email"
            value={employeedetails?.email}
            onChange={(e) => {
              setEmployeeDetails({ ...employeedetails, email: e.target.value });
              console.log(employeedetails?.email);
            }}
          />
          <input
            className="border-black border-2"
            placeholder="password"
            type="password"
            value={employeedetails?.password}
            onChange={(e) => {
              setEmployeeDetails({
                ...employeedetails,
                password: e.target.value,
              });
              console.log(employeedetails);
            }}
          />
          <button
            type="submit"
            className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              let data = JSON.stringify({
                email: employeedetails.email,
                password: employeedetails.password,
              });

              let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:8000/employeelogin",
                headers: {
                  "Content-Type": "application/json",
                },
                data: data,
              };

              axios
                .request(config)
                .then((response) => {
                  if (response.status === 200) {
                    localStorage.setItem("key", "employee");
                    navigate("/employee");
                  } else {
                    alert(response?.data?.message);
                  }
                })
                .catch((error) => {
                  alert(error.response.data.message);
                });
            }}
          >
            Login
          </button>
        </form>
      </div>
      <div className="manager_login mb-10">
        <p>MANAGER LOGIN</p>
        <form>
          <input
            className="border-black border-2 mr-5"
            placeholder="email"
            value={managerdetails?.email}
            onChange={(e) => {
              setManagerDetails({ ...managerdetails, email: e.target.value });
              console.log(managerdetails?.email);
            }}
          />
          <input
            className="border-black border-2"
            placeholder="password"
            type="password"
            value={managerdetails?.password}
            onChange={(e) => {
              setManagerDetails({
                ...managerdetails,
                password: e.target.value,
              });
              console.log(managerdetails);
            }}
          />
          <button
            type="submit"
            className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              let data = JSON.stringify({
                email: managerdetails.email,
                password: managerdetails.password,
              });

              let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: "http://localhost:8000/managerlogin",
                headers: {
                  "Content-Type": "application/json",
                },
                data: data,
              };

              axios
                .request(config)
                .then((response) => {
                  if (response.status === 200) {
                    localStorage.setItem("key", "manager");
                    navigate("/manager");
                  } else {
                    alert(response?.data?.message);
                  }
                })
                .catch((error) => {
                  alert(error.response.data.message);
                });
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
