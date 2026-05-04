import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTimeline } from "../tm/TimelineContext";

const Stats = () => {
  const { timeline } = useTimeline();

  // Count each interaction type from real timeline data
  const counts = { Text: 0, Call: 0, Video: 0 };
  timeline.forEach((item) => {
    if (counts[item.type] !== undefined) counts[item.type]++;
  });

  const data = [
    { name: "Text",  value: counts.Text,  fill: "#7C3AED" },
    { name: "Call",  value: counts.Call,  fill: "#1F2937" },
    { name: "Video", value: counts.Video, fill: "#22C55E" },
  ];

  return (
    <div className="bg-[#F8FAFC] py-10">
      <h2 className="text-5xl font-bold ml-66 mb-5 mt-10">Friendship Analytics</h2>
      <div className="bg-white rounded-xl shadow-sm p-6 w-250 mx-auto">

        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          By Interaction Type
        </h2>

        {timeline.length === 0 ? (
          <p className="text-gray-400 text-center h-80 flex items-center justify-center">
            No interactions yet. Go check in with a friend!
          </p>
        ) : (
          <div className="w-full h-80 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius="70%"
                  outerRadius="90%"
                  paddingAngle={6}
                  cornerRadius={20}
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

      </div>
    </div>
  );
};

export default Stats;