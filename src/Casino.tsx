import React from 'react';
import GameCard from '../components/GameCard';
import WalletInfo from '../components/WalletInfo';

export default function Casino() {
  return (
    <div className="p-4 space-y-6">
      {/* Banner quảng cáo */}
      <div>
        <img
          src="https://via.placeholder.com/600x200?text=Banner+Khuyen+Mai"
          alt="Banner"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Thông tin số dư ví */}
      <div>
        <WalletInfo />
      </div>

      {/* Game yêu thích */}
      <div>
        <h3 className="text-xl font-bold mb-2">Trò chơi yêu thích</h3>
        <div className="flex gap-4">
          <GameCard
            title="Slot Game"
            image="https://via.placeholder.com/150x150?text=Slot+Game"
          />
          <GameCard
            title="Blackjack"
            image="https://via.placeholder.com/150x150?text=Blackjack"
          />
        </div>
      </div>
    </div>
  );
}
