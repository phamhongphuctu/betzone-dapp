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

      if (!Pi || typeof Pi.init !== "function" || typeof Pi.authenticate !== "function") {
        alert("❌ Pi SDK chưa sẵn sàng. Hãy mở trong Pi Browser.");
        return;
      }

      try {
        console.log("🔁 Đang gọi Pi.init...");
        await Pi.init({ version: "2.0", sandbox: false }); // <-- nhớ sandbox đúng theo môi trường
        console.log("✅ Pi.init đã gọi xong");

        const cached = localStorage.getItem("pi_user");
        if (cached) {
          const parsed = JSON.parse(cached);
          setPiUser(parsed);
          console.log("📦 Dùng user từ cache:", parsed);
          return;
        }

        console.log("🔐 Gọi Pi.authenticate...");
        const user = await Pi.authenticate(["username"]);
        console.log("✅ Đăng nhập thành công:", user);
        localStorage.setItem("pi_user", JSON.stringify(user));
        setPiUser(user);
      } catch (error) {
        console.error("❌ Pi login error:", error);
      }
    };

    loginWithPi();
  }, []);

  const handleGoToDeposit = () => {
    navigate("/wallet", { state: { showDeposit: true } });
  };

  return (
    <div style={{ padding: "20px" }}>
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

      <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
        {t("homepage_welcome")}
      </h2>

      <div
        style={{
          backgroundImage: 'url("/welcome-bonus.png")', // ✅ đổi placeholder hỏng
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
