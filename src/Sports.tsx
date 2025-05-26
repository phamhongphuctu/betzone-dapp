import React from 'react';
import { useTranslation } from './useTranslation';

export default function Sports() {
  const { t } = useTranslation();

  return (
    <div className="p-4 space-y-6">
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

function SportCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="min-w-[120px] bg-gray-100 rounded-lg p-4 shadow text-center">
      <div className="text-3xl">{icon}</div>
      <div className="mt-2 font-medium">{title}</div>
    </div>
  );
}
