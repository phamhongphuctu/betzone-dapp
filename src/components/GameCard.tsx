import React from "react";
import { useNavigate } from "react-router-dom";

export default function GameCard({ title, image }: { title: string; image: string }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "Slot Game") navigate("/slot");
    // sau này thêm các điều hướng khác
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={title} className="rounded-lg shadow-md" />
      <p className="text-center mt-2 font-bold">{title}</p>
    </div>
  );
}
