import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
       <Route element={<Login/>} path="/"/>
       
      </Routes>
    </>
  );
}

export default App;
