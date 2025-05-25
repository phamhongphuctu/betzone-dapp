import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles.css'; // ✅ Gắn CSS đã chuẩn hóa

import HomePage from "./HomePage";
import Casino from "./Casino";
import Sports from "./Sports";
import Wallet from "./Wallet";
import Earn from "./Earn";
import Profile from "./Profile";

function AppContent() {
  return (
    <div className="page-container" style={{ position: "relative", minHeight: "100vh" }}>
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
        <Route path="/" element={<HomePage />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Thanh điều hướng dưới cùng */}
      <nav className="bottom-nav">
        <Link to="/">Home</Link>
        <Link to="/casino">Casino</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/earn">Earn</Link>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
