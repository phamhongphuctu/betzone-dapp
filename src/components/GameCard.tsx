interface GameCardProps {
  title: string;
  image: string;
}

export default function GameCard({ title, image }: GameCardProps) {
  return (
    <div className="game-item">
      <img src={image} alt={title} style={{ borderRadius: "8px" }} />
      <div style={{ textAlign: "center" }}>{title}</div>
    </div>
  );
}
