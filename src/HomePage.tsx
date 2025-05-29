import React, { useEffect, useState } from "react";
import { useTranslation } from "./useTranslation";
import { useLanguage } from "./LanguageContext";
import type { Language } from "./LanguageContext";

export default function HomePage() {
  const { t } = useTranslation();
  const { lang } = useLanguage(); // không dùng setLang ở đây
  const [piUser, setPiUser] = useState<any>(null);
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const loginWithPi = async () => {
      const Pi = (window as any).Pi;
      if (!Pi) {
        console.warn("⚠️ Pi SDK not found. Are you running in Pi Browser?");
        return;
      }

      // Nếu đã có user rồi thì không login lại
      const cached = localStorage.getItem("pi_user");
      if (cached) {
        setPiUser(JSON.parse(cached));
        setBalance(3.1415); // demo
        return;
      }

      try {
        const scopes = ["username", "payments"];
        const authResult = await Pi.authenticate(scopes);
        setPiUser(authResult.user);
        localStorage.setItem("pi_user", JSON.stringify(authResult.user));
        setBalance(3.1415); // demo
      } catch (error) {
        console.error("❌ Pi login error:", error);
      }
    };

    loginWithPi();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* Banner */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src="https://via.placeholder.com/600x200?text=Welcome+to+Betzone"
          alt="Welcome Banner"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>

      {/* Số dư người dùng */}
      <div
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p>👤 {t.user}: {piUser?.username || t.pending}</p>
        <p>💰 {t.pi_balance}: {balance !== null ? `${balance} Pi` : t.pending}</p>

        {piUser && (
          <button
            onClick={() => {
              localStorage.removeItem("pi_user");
              window.location.reload();
            }}
            style={{
              marginTop: "10px",
              padding: "8px 12px",
              backgroundColor: "#444",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            🔓 {t.logout || "Đăng xuất"}
          </button>
        )}
      </div>

      {/* Khuyến mãi */}
      <div>
        <h3>🔥 {t.promotions}</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>🎁 {t.promo1}</li>
          <li>💸 {t.promo2}</li>
          <li>🏆 {t.promo3}</li>
        </ul>
      </div>
    </div>
  );
}
