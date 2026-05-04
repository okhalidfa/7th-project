import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTimeline } from "../tm/TimelineContext";

const Stats = () => {
  const { timeline } = useTimeline();

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
    <div className="bg-[#F8FAFC]  py-6 sm:py-2 md:py-10 px-4 sm:px-8 md:px-12 lg:px-50">

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 mt-4 sm:mt-6 md:mt-10">
        Friendship Analytics
      </h2>


      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full">

        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-6">
          By Interaction Type
        </h2>

        {timeline.length === 0 ? (
          <div className="h-60 sm:h-72 md:h-80 flex items-center justify-center pb-5">
            <p className="text-gray-400 text-center text-sm sm:text-base">
              No interactions yet. Go check in with a friend!
            </p>
          </div>
        ) : (
          <div className="w-full h-60 sm:h-72 md:h-80 flex justify-center items-center">
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
                <Tooltip/>
                <Legend/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

      </div>
    </div>
  );
};

export default Stats;