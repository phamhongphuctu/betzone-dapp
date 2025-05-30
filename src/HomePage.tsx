import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';


export default function HomePage() {
  const { t } = useTranslation();
  const [piUser, setPiUser] = useState<{ username?: string } | null>(null);

  useEffect(() => {
    const loginWithPi = async () => {
      const Pi = (window as any).Pi;
      if (!Pi) {
        console.warn("⚠️ Pi SDK not found. Please open in Pi Browser.");
        return;
      }

      // Nếu đã cache user trong localStorage thì dùng luôn
      const cached = localStorage.getItem("pi_user");
      if (cached) {
        setPiUser(JSON.parse(cached));
        return;
      }

      try {
        // Yêu cầu quyền lấy username, payments nếu cần
        const user = await Pi.authenticate({ scopes: ["username"] });
        setPiUser(user);
        localStorage.setItem("pi_user", JSON.stringify(user));
      } catch (error) {
        console.error("Pi login error:", error);
      }
    };

    loginWithPi();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* Hiển thị username hoặc thông báo */}
      <div
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p>👤 {t("user")}: {piUser?.username || t("pending")}</p>
      </div>
    </div>
  );
}
