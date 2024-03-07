import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Cashier from "./components/Cashier";
import Employee from "./components/Employee";
import Manager from "./components/Manager";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cashier" element={<Cashier />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
