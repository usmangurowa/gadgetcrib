import logo from "./logo.svg";
import "./App.css";

import Product from "./Components/Product/Product";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
