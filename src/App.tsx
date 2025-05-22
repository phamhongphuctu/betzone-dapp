import { Routes, Route, Link } from "react-router-dom";
import Casino from "./Casino";
import "./styles.css";
import Sports from "./Sports";
import Wallet from "./Wallet";
import Earn from "./Earn";
import Profile from "./Profile";
export default function App() {
  return (
    <>
      {/* Nút profile góc phải */}
      <Link
        to="/profile"
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          fontSize: "24px",
          textDecoration: "none",
        }}
      >
        {"👤"}
      </Link>

      <div>
        {/* Hiển thị nội dung từng trang */}
        <Routes>
          <Route path="/" element={<Casino />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Thanh điều hướng dưới */}
        <nav
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-around",
            background: "#eee",
            padding: "10px",
          }}
        >
          <Link to="/">Casino</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/wallet">Wallet</Link>
          <Link to="/earn">Earn</Link>
        </nav>
      </div>
    </>
  );
}
