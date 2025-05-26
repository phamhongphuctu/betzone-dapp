export default function GameCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="w-[150px] flex-shrink-0 text-center">
      <img src={image} alt={title} className="w-full rounded-lg mb-1" />
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}
