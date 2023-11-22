//Import des frameworks
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Menu } from "antd";

//import fichier css
import "./App.css";
//import des components
import Inscription from "./components/inscription";
import Connection from "./components/connection";
import User from "./components/User";
import Home from "./components/Home";
import Annonce from "./components/Annonce";

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
      </Router>
    </>
  );
};

export default App;
