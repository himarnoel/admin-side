import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Courses from "./Pages/Courses";
import Dash from "./Pages/Dash";
import Upload from "./Pages/Upload";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
       <Route element={<Login/>} path="/"/>
       <Route element={<Dash/>} path="/dash"/>
       <Route element={<Courses/>} path="/courses"/>
       <Route element={<Upload/>} path="/upload"/>
      </Routes>
    </>
  );
}

export default App;
