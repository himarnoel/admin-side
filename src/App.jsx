import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Courses from "./Pages/Courses";
import Dash from "./Pages/Dash";
import Upload from "./Pages/Upload";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Functions/firebase-config";
import "react-toastify/dist/ReactToastify.min.css";
function App() {
  const [uid, setuid] = useState("");
  onAuthStateChanged(auth, (currentuser) => {
    if (currentuser !== null) {
      setuid(currentuser.uid);
    } else {
      setuid("");
    }
    console.log(uid);
  });

  return (
    <>
      <Routes>
        <Route
          element={uid.length == 0 ? <Login /> : <Navigate to="/dash" />}
          path="/"
        />
        <Route
          element={uid.length == 0 ? <Navigate to="/" /> : <Dash />}
          path="/dash"
        />
        <Route
          element={uid.length == 0 ? <Navigate to="/" /> : <Courses />}
          path="/courses"
        />
        <Route
          element={uid.length == 0 ? <Navigate to="/" /> : <Upload />}
          path="/upload"
        />
        <Route element={<Navigate to="/" />} path="*" />
      </Routes>
    </>
  );
}

export default App;
