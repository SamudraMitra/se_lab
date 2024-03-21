import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Cashier from "./components/Cashier";
import Employee from "./components/Employee";
import Manager from "./components/Manager";
import AddItem from "./components/AddItem";
import Forbidden from "./components/Forbidden";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cashier" element={<Cashier />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/forbidden" element={<Forbidden />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
