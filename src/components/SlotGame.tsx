import React, { useState } from "react";

export default function SlotGame() {
  const [slots, setSlots] = useState(["❓", "❓", "❓"]);
  const [message, setMessage] = useState("");

  const symbols = ["🍒", "🍋", "🍊", "⭐", "💎"];

  const spin = () => {
    const result = Array(3)
      .fill(null)
      .map(() => symbols[Math.floor(Math.random() * symbols.length)]);
    setSlots(result);
    if (result[0] === result[1] && result[1] === result[2]) {
      setMessage("🎉 JACKPOT!");
    } else {
      setMessage("Try again");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🎰 Slot Game</h2>
      <div style={{ fontSize: "2rem", margin: "20px 0" }}>{slots.join("  ")}</div>
      <button
        onClick={spin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#6200ee",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        SPIN
      </button>
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p>
    </div>
  );
}
