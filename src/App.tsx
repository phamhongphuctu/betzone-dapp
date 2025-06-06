import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

import HomePage from "./HomePage";
import Casino from "./Casino";
import Sports from "./Sports";
import Wallet from "./Wallet";
import Earn from "./Earn";
import Profile from "./Profile";
import SlotGame from "./components/SlotGame";

import { useTranslation } from "react-i18next";

function AppContent() {
  const { t } = useTranslation();

  useEffect(() => {
    const Pi = (window as any).Pi;
    if (Pi && Pi.init) {
      Pi.init({ version: "2.0" });
    }
  }, []);

  return (
    <div className="page-container" style={{ position: "relative", minHeight: "100vh" }}>
      {/* Nút Profile cố định góc phải trên */}
      <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
        <Link
          to="/profile"
          style={{
            textDecoration: "none",
            background: "#222",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "20px",
            fontSize: "14px",
          }}
        >
          👤 {t("profile")}
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
        <Route path="/slot" element={<SlotGame />} />
      </Routes>

      {/* Thanh điều hướng dưới cùng */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-around",
          background: "#f0f0f0",
          padding: "10px 0",
          borderTop: "1px solid #ccc",
        }}
      >
        <Link to="/">{t("home")}</Link>
        <Link to="/casino">{t("casino")}</Link>
        <Link to="/sports">{t("sports")}</Link>
        <Link to="/wallet">{t("wallet")}</Link>
        <Link to="/earn">{t("earn")}</Link>
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
