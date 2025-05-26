import React from "react";
import { useTranslation } from "react-i18next";

// ✅ Khai báo rõ kiểu Props
interface WalletInfoProps {
  username: string;
  balance: number;
}

export default function WalletInfo({ username, balance }: WalletInfoProps) {
  const { t } = useTranslation();

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
    </div>
  );
}
