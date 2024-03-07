import React from "react";

const Login = () => {
  return (
    <div>
      <div className="cashier_login mb-10">
        <p>CASHIER LOGIN</p>
        <form>
          <input className="border-black border-2 mr-5" placeholder="email" />
          <input className="border-black border-2" placeholder="password" />
          <button
            type="submit"
            className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
      <div className="employee_login mb-10">
        <p>EMPLOYEE LOGIN</p>
        <form>
          <input className="border-black border-2 mr-5" placeholder="email" />
          <input className="border-black border-2" placeholder="password" />
          <button
            type="submit"
            className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
      <div className="manager_login mb-10">
        <p>MANAGER LOGIN</p>
        <form>
          <input className="border-black border-2 mr-5" placeholder="email" />
          <input className="border-black border-2" placeholder="password" />
          <button
            type="submit"
            className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
