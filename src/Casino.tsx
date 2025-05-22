import React from "react";
import GameCard from "./components/GameCard";
import WalletInfo from "./components/WalletInfo";

export default function Casino() {
  return (
    <div className="casino-page">
      {/* Banner */}
      <div className="banner">
        <img
          src="https://via.placeholder.com/600x200?text=Banner+Promo"
          alt="Banner"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>

      {/* Wallet Info */}
      <WalletInfo />

      {/* Game List */}
      <div className="game-list">
        <h3>Trò chơi yêu thích</h3>
        <div className="game-card" style={{ display: "flex", gap: "15px" }}>
          <GameCard
            title="Slot Game"
            image="https://via.placeholder.com/150x150?text=Slot+Game"
          />
        </div>
      </div>
    </div>
  );
}
