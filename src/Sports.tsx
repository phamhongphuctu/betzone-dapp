import React from 'react';
import { useTranslation } from './useTranslation';  // thêm import useTranslation
import SportCard from './components/SportCard';

   

export default function Sports() {
  const { t } = useTranslation();
  // phần còn lại giữ nguyên

  const username = "anh-tu";
  const balance = 3000;

  return (
    <div className="p-4 space-y-6">
      {/* Thông tin người dùng */}
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4">
        <p>Người dùng: <strong>{username}</strong></p>
        <p>Số dư Pi: <strong>{balance.toLocaleString()} Pi</strong></p>
      </div>

      {/* Banner thể thao */}
      <div>
        <img
          src="https://via.placeholder.com/600x200?text=Banner+The+Thao"
          alt="Sports Banner"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Trực tiếp hôm nay */}
      <div>
        <h3 className="text-xl font-bold mb-2">{t.live_today}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <SportCard icon="⚽" title={t.soccer} />
          <SportCard icon="🏀" title={t.basketball} />
          <SportCard icon="🎾" title={t.tennis} />
        </div>
      </div>

      {/* Trận sắp diễn ra */}
      <div>
        <h3 className="text-xl font-bold mb-2">{t.upcoming}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <SportCard icon="🏐" title={t.volleyball} />
          <SportCard icon="🥊" title={t.mma} />
        </div>
      </div>
    </div>
  );
}
