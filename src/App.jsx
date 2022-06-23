import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Micro/Button";

function App() {
  return (
    <div className="flex flex-row">
      <Button variant="contained">Contained button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="basic">Basic Button</Button>
    </div>
  );
}

export default App;
