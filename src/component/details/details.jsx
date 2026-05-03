import React from 'react';
import { useParams } from 'react-router';
import { friends } from '../Home';

const statusConfig = {
  "on-track":   { label: "On Track",   className: "bg-[#244D3F] text-white" },
  "almost-due": { label: "Almost Due", className: "bg-orange-400 text-white" },
  "overdue":    { label: "Overdue",    className: "bg-red-500 text-white" },
};

const normalizeStatus = (status) => status?.toLowerCase().replace(/\s+/g, "-");

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });

const Details = () => {
  const { id } = useParams();
  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 text-lg">
        Friend not found.
      </div>
    );
  }

  const status = statusConfig[normalizeStatus(friend.status)] || statusConfig["on-track"];

  return (
    <div className="bg-[#F2F2F7] min-h-screen p-10">
      <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-sm p-6">

        <div className="col-span-1 border-r border-gray-100 pr-6 flex flex-col">

          <div className="flex flex-col items-center text-center pb-6 border-b border-gray-100">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <h2 className="font-bold text-xl mt-3">{friend.name}</h2>

            <span className={`text-xs font-semibold px-3 py-1 rounded-full mt-2 ${status.className}`}>
              {status.label}
            </span>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {friend.tags.map((tag, i) => (
                <span key={i} className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-400 italic text-sm mt-3">"{friend.bio}"</p>
            <p className="text-gray-400 text-sm mt-1">Preferred: {friend.email}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col mt-4 divide-y divide-gray-100">
            <button className="flex items-center gap-2 py-3 text-sm text-gray-700 hover:bg-gray-50 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              Snooze 2 Weeks
            </button>

            <button className="flex items-center gap-2 py-3 text-sm text-gray-700 hover:bg-gray-50 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="21 8 21 21 3 21 3 8"/>
                <rect x="1" y="3" width="22" height="5"/>
                <line x1="10" y1="12" x2="14" y2="12"/>
              </svg>
              Archive
            </button>

            <button className="flex items-center gap-2 py-3 text-sm text-red-500 hover:bg-red-50 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/>
                <path d="M10 11v6"/><path d="M14 11v6"/>
                <path d="M9 6V4h6v2"/>
              </svg>
              Delete
            </button>
          </div>
        </div>

        <div className="col-span-2 pl-4 flex flex-col gap-4">

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-[#244D3F]">{friend.days_since_contact}</p>
              <p className="text-sm text-gray-500 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-[#244D3F]">{friend.goal}</p>
              <p className="text-sm text-gray-500 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-xl font-bold text-[#244D3F]">{formatDate(friend.next_due_date)}</p>
              <p className="text-sm text-gray-500 mt-1">Next Due</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Relationship Goal</h3>
              <button className="border border-gray-300 text-sm px-4 py-1 rounded-lg hover:bg-gray-100">
                Edit
              </button>
            </div>
            <p className="text-gray-600 mt-2">
              Connect every <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-semibold text-lg mb-3">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">

              <button onClick={() => alert(`Call with ${friend.name}...`)} className="bg-white border border-gray-200 rounded-xl py-5 flex flex-col items-center gap-2 hover:shadow-md transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-sm font-medium">Call</span>
              </button>

              <button onClick={() => alert(`Text with ${friend.name}...`)} className="bg-white border border-gray-200 rounded-xl py-5 flex flex-col items-center gap-2 hover:shadow-md transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span className="text-sm font-medium">Text</span>
              </button>

              <button onClick={() => alert(`Video with ${friend.name}...`)} className="bg-white border border-gray-200 rounded-xl py-5 flex flex-col items-center gap-2 hover:shadow-md transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
                <span className="text-sm font-medium">Video</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;