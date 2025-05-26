import React from 'react';
import { useTranslation } from './useTranslation';

export default function Earn() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t.earn}</h2>
      <p>{t.welcome}</p>

      <h3 style={{ marginTop: '20px' }}>🎯 {t.promotions}</h3>
      <ul style={{ lineHeight: '1.8' }}>
        <li>🎁 {t.promo1}</li>
        <li>💸 {t.promo2}</li>
        <li>🏆 {t.promo3}</li>
      </ul>

      <h3 style={{ marginTop: '20px' }}>🪙 {t.howToEarn || "Các cách kiếm Pi:"}</h3>
      <ul>
        <li>🔁 {t.refer || "Giới thiệu bạn bè"}</li>
        <li>🎮 {t.play || "Chơi game và hoàn Pi"}</li>
        <li>📈 {t.promote || "Tham gia chương trình khuyến mãi"}</li>
      </ul>
    </div>
  );
}