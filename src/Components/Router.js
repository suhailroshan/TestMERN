import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./CSS/global.css";

//Pages
import MaterialUI from './MaterialUI';
import NewPageDesign from "./NewPageDesign";


class Routers extends Component {
  render() {
    return (
      <Router>
        <nav>
          <h1 style={{ textAlign: "center" }}>BLBI Sample</h1>
          <Link to="/">Login</Link>
          <Link to="/NewPageDesign">About Us</Link>
        </nav>

        <Routes>
          <Route path="/" element={<MaterialUI />} />
          <Route path="/NewPageDesign" element={<NewPageDesign />} />
          
        </Routes>
      </Router>
    );
  }
}

export default Routers;