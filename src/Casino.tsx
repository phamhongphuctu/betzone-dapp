import React from 'react';
import GameCard from './components/GameCard';
import WalletInfo from './components/WalletInfo';
import { useTranslation } from './useTranslation';
import SlotGame from './components/SlotGame'; // <-- thêm dòng này

export default function Casino() {
  const { t } = useTranslation();

  return (
    <div className="p-4 space-y-6">
      {/* Banner */}
      ...

      {/* Thông tin ví */}
      ...

      {/* Top Games */}
      <div>
        <h3 className="text-xl font-bold mb-2">{t.top_games}</h3>
        <div className="flex gap-4 overflow-x-auto">
          <GameCard title="Slot Game" image="..." />
          ...
        </div>
      </div>

      {/* Slot Game thực tế */}
      <div className="mt-6">
        <SlotGame />
      </div>

      {/* Các nhóm game khác */}
      ...
    </div>
  );
}
