import React, { useState } from "react";
import "./styles.css"; // Import styles
import Button from "./components/Button";
import TextField from "./components/TextField";
import Graphic from "./components/Graphic";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container">
      <h1>React Lab Project</h1>

      <div className="buttons">
        <Button label="Button 1" onClick={() => alert("Button 1 clicked!")} />
        <Button label="Button 2" onClick={() => alert("Button 2 clicked!")} />
        <Button label="Button 3" onClick={() => alert("Button 3 clicked!")} />
      </div>

      <h2>Text Input</h2>
      <TextField value={inputValue} onChange={handleChange} />
      <p>Entered Text: {inputValue}</p>

      <h2>Graphic</h2>
      <Graphic />
    </div>
  );
}

export default App;
