import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home.js";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard.js";
// import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>


        <Routes>

          <Route path="/"  element={<Home/>}/>
          <Route path="/login"  element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/signup"  element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/dashboard"  element={<Dashboard/>}/>
          
        </Routes>

    </div>
  );
}

export default App;
