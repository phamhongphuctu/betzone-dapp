import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

interface WalletInfoProps {
  username: string;
  balance: number;
}

export default function WalletInfo({ username, balance }: WalletInfoProps) {
  const { t } = useTranslation();
  const location = useLocation();

  const handleDeposit = async () => {
    const Pi = (window as any).Pi;
    if (!Pi || !Pi.createPayment) {
      alert(t("sdk_not_ready"));
      return;
    }

    try {
      Pi.createPayment(
        {
          amount: 1, // 👉 Có thể thay đổi số Pi muốn nạp
          memo: username,
          metadata: { type: "deposit", username },
        },
        {
          onReadyForServerApproval: async (paymentId: string) => {
            console.log("✅ Ready for server approval", paymentId);
            await fetch("https://betzone-wallet-api.onrender.com/api/approve-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId }),
            });
          },

          onReadyForServerCompletion: async (paymentId: string, txid: string) => {
            console.log("✅ Ready for server completion", paymentId, txid);
            await fetch("https://betzone-wallet-api.onrender.com/api/complete-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentId, txid }),
            });
          },

          onCancel: (paymentId: string) => {
            console.warn("❌ Payment cancelled", paymentId);
          },

          onError: (error: any) => {
            console.error("❌ Payment error", error);
            alert(t("deposit_error"));
          },
        }
      );
    } catch (err) {
      console.error("❌ Deposit failed", err);
      alert(t("deposit_failed"));
    }
  };

  return (
    <div
      style={{
        background: "#333",
        color: "#fff",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <p>👤 {t("username")}: {username}</p>
      <p>💰 {t("pi_balance")}: {balance.toLocaleString()} Pi</p>

      <button
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          background: "#ffd700",
          color: "black",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={handleDeposit}
      >
        🚀 {t("deposit_button")}
      </button>
    </div>
  );
}
