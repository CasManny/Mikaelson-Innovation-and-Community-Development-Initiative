import React from "react";
import { ChartArea } from "lucide-react";

const data = [
  { icon: "📝", title: "Posts Today", figure: 10 },
  { icon: "❤️", title: "Likes", figure: 9 },
  { icon: "👥", title: "Members", figure: 1889 },
  { icon: "🔥", title: "Active Challenges", figure: 20 },
];

export const CommunityStats = () => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden w-full max-w-md mx-auto">
      <div className="flex gap-2 items-center my-2 p-3 border-b">
        <ChartArea className="text-blue-500" />
        <h1 className="font-bold text-lg">Community Stats</h1>
      </div>

      <div className="grid grid-cols-2 gap-3 p-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="font-semibold text-center text-sm mt-1">{item.title}</p>
            <p className="text-lg font-bold text-gray-700">{item.figure}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
