import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getWalletAddress } from "../utils/wallet"; // ✅ import hàm lấy ví

interface WalletInfoProps {
  username: string;
  balance: number;
}

export default function WalletInfo({ username, balance }: WalletInfoProps) {
  const { t } = useTranslation();
  const [address, setAddress] = useState<string>("Đang tải...");

  useEffect(() => {
    getWalletAddress(username)
      .then(setAddress)
      .catch((err) => {
        console.error("Lỗi lấy ví:", err);
        setAddress("Không tìm thấy ví");
      });
  }, [username]);

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
      <p>📬 {t("wallet_address")}: {address}</p>
    </div>
  );
}
