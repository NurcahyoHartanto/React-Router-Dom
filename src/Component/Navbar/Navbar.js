import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../Navbar/Navbar.css"
import Home from "../Home/Home";
import Tentang from "../Tentang/Tentang";
import Layanan from "../Layanan/Layanan";
import Kontak from "../Kontak/Kontak";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/tentang">Tentang</Link>
          </li>
          <li className="nav-item">
            <Link to="/layanan">Layanan</Link>
          </li>
          <li className="nav-item">
            <Link to="/kontak">Kontak</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
