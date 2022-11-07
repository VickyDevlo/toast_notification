import React, { useState } from "react";
import "./App.css";
import Toast from "./Components/Toast";

function App() {
  const [Isopen, setIsopen] = useState(false);

  const toastOpenHandler = () => {
    setIsopen(true);
  };

  const removeHandler = () => {
    setIsopen(!Isopen);
  };

  return (
    <div className="App">
      <Toast Isopen={Isopen} removeHandler={removeHandler} />

      <button className="toastOpenBtn" onClick={toastOpenHandler}>
        ToastBaropen
      </button>
    </div>
  );
}

export default App;
