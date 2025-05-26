import React from "react";
import { useLanguage } from "./LanguageContext";
import type { Language } from "./LanguageContext";
import { useTranslation } from "./useTranslation";

export default function Profile() {
  const { lang, setLang } = useLanguage();
  const { t } = useTranslation();

  return (
    <div style={{ padding: "20px" }}>
      <h2>{t.profile}</h2>
      <p>
        <strong>{t.user}:</strong> anh-tu
      </p>
      <p>
  <strong>{t.id}:</strong> 123456789
</p>
<p>
  <strong>{t.joined}:</strong> 22 Tháng 5, 2025
</p>


      <h3 style={{ marginTop: "20px" }}>🌐 Language</h3>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as Language)}
      >
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
        <option value="es">Español</option> {/* ✅ dòng này đã bật lại */}
      </select>

      <h3 style={{ marginTop: "20px" }}>{t.promotions}</h3>
      <div
        style={{
          background: "#333",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        🎁 {t.promo1}
        <br />
        💰 {t.promo2}
        <br />
        <i style={{ fontSize: "12px", opacity: 0.7 }}>{t.pending}</i>
      </div>
    </div>
  );
}
