import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { t } = useTranslation();
  const [piUser, setPiUser] = useState<{ username?: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loginWithPi = async () => {
      const Pi = (window as any).Pi;
  
      // ✅ Kiểm tra SDK có đầy đủ không
      if (!Pi || !Pi.createPayment) {
        alert("❌ Pi SDK chưa sẵn sàng. Hãy chắc chắn bạn đang dùng Pi Browser Testnet.");
        return;
      }
  
      const cached = localStorage.getItem("pi_user");
      if (cached) {
        setPiUser(JSON.parse(cached));
        return;
      }
  
      try {
        const user = await Pi.authenticate({ scopes: ["username"] });
        setPiUser(user);
        localStorage.setItem("pi_user", JSON.stringify(user));
      } catch (error) {
        console.error("Pi login error:", error);
      }
    };
  
    loginWithPi();
  }, []);
  

  const handleGoToDeposit = () => {
    navigate('/wallet', { state: { showDeposit: true } });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Thông tin user */}
      <div
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p>🕤 {t("user")}: {piUser?.username || t("pending")}</p>
      </div>

      {/* 👋 Lời chào mừng */}
      <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
        {t("homepage_welcome")}
      </h2>

      {/* Banner Welcome Bonus */}
      <div
        style={{
          backgroundImage: 'url("https://via.placeholder.com/600x200?text=Welcome+Bonus")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          padding: "40px 20px",
          color: "#fff",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>{t("promotions")}</h2>
        <p style={{ fontSize: "16px", marginTop: "10px" }}>{t("promo1")}</p>

        <button
          onClick={handleGoToDeposit}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            fontWeight: "bold",
            borderRadius: "8px",
            background: "yellow",
            border: "none",
            color: "#000",
            cursor: "pointer",
          }}
        >
          🚀 {t("deposit_button")}
        </button>
      </div>
    </div>
  );
}
