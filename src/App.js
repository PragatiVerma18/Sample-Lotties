import React from "react";
import "./App.css";
import UncontrolledLottie from "./Components/UncontrolledLottie";
import ControlledLottie from "./Components/ControlledLottie";

function App() {
  return (
    <div className="App">
      <div className="lotties">
        <UncontrolledLottie />
        <ControlledLottie />
      </div>
    </div>
  );
}

export default App;
