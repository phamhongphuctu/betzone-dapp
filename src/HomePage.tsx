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

      if (!Pi?.init || !Pi?.authenticate) {
        alert("❌ Pi SDK chưa sẵn sàng. Hãy mở trong Pi Browser.");
        return;
      }

      try {
        console.log("🔁 Đang gọi Pi.init...");
        await Pi.init({ version: "2.0", sandbox: true }); // ✅ Quan trọng: sandbox = true
        console.log("✅ Pi.init đã gọi xong");

        const cached = localStorage.getItem("pi_user");
        if (cached) {
          const parsed = JSON.parse(cached);
          setPiUser(parsed);
          console.log("📦 Dùng user từ cache:", parsed);
          return;
        }

        console.log("🔐 Gọi Pi.authenticate...");
        const user = await Pi.authenticate(["username", "payments"]);
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

  const handleTestPayment = () => {
    const Pi = (window as any).Pi;

    if (!Pi?.createPayment) {
      alert("❌ Pi SDK chưa sẵn sàng!");
      return;
    }

    Pi.createPayment(
      {
        amount: 0.01,
        memo: "Test transaction",
        metadata: { type: "test" }
      },
      {
        onReadyForServerApproval: async (paymentId: string) => {
          console.log("🟡 Giao dịch chờ duyệt:", paymentId);
          try {
            const res = await fetch("https://betzone-wallet-api.onrender.com/api/approve-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId })
            });
            const data = await res.json();
            console.log("✅ Server approve:", data);
          } catch (err) {
            console.error("❌ approve-payment lỗi:", err);
          }
        },

        onReadyForServerCompletion: async (paymentId: string, txid: string) => {
          console.log("🎉 Giao dịch thành công:", paymentId, txid);
          try {
            const res = await fetch("https://betzone-wallet-api.onrender.com/api/complete-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId, txid })
            });
            const data = await res.json();
            console.log("✅ Server completed:", data);
          } catch (err) {
            console.error("❌ complete-payment lỗi:", err);
          }
        },

        onCancel: (paymentId: string) => {
          console.warn("⚠️ Giao dịch bị huỷ:", paymentId);
        },

        onError: (error: any, paymentId: string) => {
          console.error("❌ Lỗi khi thanh toán:", error, "ID:", paymentId);
        }
      }
    );
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
          backgroundImage: 'url("/welcome-bonus.png")',
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

        <br /><br />

        <button
          onClick={handleTestPayment}
          style={{
            padding: "10px 20px",
            background: "#0f0",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          💳 Thanh toán thử 0.01 Pi
        </button>
      </div>
    </div>
  );
}
