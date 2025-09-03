import React from "react";
import type { AIType } from "../data/Korone";

export default function AICard({ tool }: { tool: AIType }) {
  // สำหรับแสดงสถานะ Top10
  function TopStatus({ isTop }: { isTop: boolean }) {
    if (isTop) return <p className="mt-2 text-green-600 font-semibold">🔥 Popular AI (Top 10)</p>;
    return <p className="mt-2 text-gray-400">Normal AI</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-4 max-w-md mx-auto border border-gray-200 rounded-2xl shadow-md p-4 hover:shadow-xl transition">
      <div className="w-20 h-20 col-span-1 flex items-center justify-center">
        <img src={tool.Logo} alt={tool.Title} className="w-full h-full rounded-full" />
      </div>

      <div className="col-span-3 flex flex-col justify-center">
        <h3 className="font-bold text-lg">{tool.Title}</h3>
        <p className="text-gray-600 text-sm mt-1">{tool.Description}</p>
        <p className="text-sm">👤 Owner: {tool.Owner}</p>
        <p className="text-sm">🆚 Version: {tool.LastestVersion}</p>
        <p className="text-sm">💲 Price: ${tool.Price}</p>
        <TopStatus isTop={tool.Top10} />
      </div>

      <div className="col-span-1 flex items-center justify-center">
        <a
          href={tool.Website}
          target="_blank"
          rel="noreferrer"
          className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-4 py-2 text-sm"
        >
          Website
        </a>
      </div>
    </div>
  );
}
