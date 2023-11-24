//Import des frameworks
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Menu } from "antd";

//import fichier css
import "./App.css";
//import des components
import Inscription from "./components/Inscription.jsx";
import Connection from "./components/Connection.jsx";
import User from "./components/User.jsx";
import Home from "./components/Home.jsx";
import Annonce from "./components/Annonce.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/user" element={<User />} />
          <Route path="/annonce" element={<Annonce />} />
        </Routes>
        <ToastContainer position="top-right" />
      </Router>
    </>
  );
};

export default App;
