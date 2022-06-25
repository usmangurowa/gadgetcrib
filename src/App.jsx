import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Micro/Button";
import IconButton from "./Components/Micro/IconButton";
import * as Icons from "react-icons/ai";
import Product from "./Components/Product/Product";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Product />
      </div>
    </>
  );
}

export default App;
