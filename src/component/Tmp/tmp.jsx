import React, { useState } from 'react';
import { useTimeline } from "../tm/TimelineContext";

// 👉 Import images
import callIcon from "../lpic/call.png";
import textIcon from "../lpic/text.png";
import videoIcon from "../lpic/video.png";

// 👉 Icon mapping (images instead of material icons)
const typeIcon = {
  Call: callIcon,
  Text: textIcon,
  Video: videoIcon,
};

// 👉 Color mapping
const typeColor = {
  Call: "bg-blue-100 text-blue-700",
  Text: "bg-green-100 text-green-700",
  Video: "bg-purple-100 text-purple-700",
};

const Tmp = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("");

  const filtered = timeline.filter(item =>
    filter === "" ? true : item.type === filter
  );

  return (
    <div className='bg-[#F8FAFC] w-full min-h-screen'>
      <div className='px-4 sm:px-8 md:px-12 lg:px-40 pt-6 lg:pt-15'>

        {/* Title */}
        <h2 className='font-bold text-[48px]'>Timeline</h2>

        {/* Filter */}
        <select
          className="select select-bordered w-full max-w-xs bg-[#F8FAFC] text-[#64748B]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Filter timeline</option>
          <option value="Text">Text</option>
          <option value="Call">Call</option>
          <option value="Video">Video</option>
        </select>

        {/* Empty State */}
        {filtered.length === 0 && (
          <p className="text-gray-400 text-center mt-20">
            No interactions yet. Go check in with a friend!
          </p>
        )}

        {/* Timeline Cards */}
        <div className="flex flex-col gap-4 mt-6 mb-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4"
            >

              {/* Icon with image */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center`}>
                <img
                  src={typeIcon[item.type]}
                  alt={item.type}
                  className="w-5 h-5 object-contain"
                />
              </div>

              {/* Info */}
              <div>
                <p className="font-medium text-[20px] text-gray-800">
                  {item.type} <span className='text-[#64748B] text-[18px] font-normal'>with {item.friendName}</span>
                </p>
                <p className="text-[16px] pl-0.5 text-gray-400">
                  {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                  })}
                </p>
              </div>

              

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Tmp;