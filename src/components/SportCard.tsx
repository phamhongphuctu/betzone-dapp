import React from 'react';

export default function SportCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="min-w-[120px] bg-gray-100 rounded-lg p-4 shadow text-center">
      <div className="text-3xl">{icon}</div>
      <div className="mt-2 font-medium">{title}</div>
    </div>
  );
}
