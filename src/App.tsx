import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Casino from "./Casino";
import Sports from "./Sports";
import Wallet from "./Wallet";
import Earn from "./Earn";
import Profile from "./Profile";

export default function App() {
  return (
    <Router>
      <div style={{ padding: "60px 20px 80px", position: "relative", minHeight: "100vh" }}>
        
        {/* Nút Profile cố định góc phải trên */}
        <div style={{
          position: "fixed",
          top: 10,
          right: 10,
          zIndex: 1000,
        }}>
          <Link to="/profile" style={{
            textDecoration: "none",
            background: "#222",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "20px",
            fontSize: "14px"
          }}>
            👤 Profile
          </Link>
        </div>

        {/* Nội dung các trang */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Thanh điều hướng dưới cùng */}
        <nav style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-around",
          background: "#f0f0f0",
          padding: "10px 0",
          borderTop: "1px solid #ccc"
        }}>
          <Link to="/">Home</Link>
          <Link to="/casino">Casino</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/wallet">Wallet</Link>
          <Link to="/earn">Earn</Link>
        </nav>
      </div>
    </Router>
  );
}
