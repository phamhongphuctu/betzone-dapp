import React from "react";
import { useTranslation } from "react-i18next";

export default function WalletInfo() {
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
      <p>👤 {t("username")}: {t("pending")}</p>
      <p>💰 {t("pi_balance")}: {t("pending")}</p>
    </div>
  );
}
