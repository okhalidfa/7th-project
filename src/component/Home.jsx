import React from 'react';
import { Link } from 'react-router';
export const friends = [
  {
    "id": 1,
    "name": "John Doe",
    "picture": "https://randomuser.me/api/portraits/men/32.jpg",
    "email": "john.doe@gmail.com",
    "days_since_contact": 18,
    "status": "Overdue",
    "tags": ["WORK", "FAMILY"],
    "bio": "Met during university orientation. We still enjoy hiking trips and weekend coffee chats.",
    "goal": 14,
    "next_due_date": "2026-05-05"
  },
  {
    "id": 2,
    "name": "Sarah Ahmed",
    "picture": "https://randomuser.me/api/portraits/women/45.jpg",
    "email": "sarah.ahmed@gmail.com",
    "days_since_contact": 13,
    "status": "Almost due",
    "tags": ["WORK"],
    "bio": "Former teammate who helped me grow professionally. We often discuss career growth and leadership.",
    "goal": 14,
    "next_due_date": "2026-05-07"
  },
  {
    "id": 3,
    "name": "David Kim",
    "picture": "https://randomuser.me/api/portraits/men/55.jpg",
    "email": "david.kim@gmail.com",
    "days_since_contact": 5,
    "status": "On-track",
    "tags": ["TRAVEL", "HOBBY"],
    "bio": "Workout partner who also loves planning affordable travel adventures around Asia.",
    "goal": 14,
    "next_due_date": "2026-05-16"
  },
  {
    "id": 4,
    "name": "Emma Wilson",
    "picture": "https://randomuser.me/api/portraits/women/22.jpg",
    "email": "emma.wilson@gmail.com",
    "days_since_contact": 15,
    "status": "Overdue",
    "tags": ["FAMILY"],
    "bio": "We grew up in the same neighborhood and still meet during family gatherings.",
    "goal": 14,
    "next_due_date": "2026-05-03"
  },
  {
    "id": 5,
    "name": "Rahim Hasan",
    "picture": "https://randomuser.me/api/portraits/men/67.jpg",
    "email": "rahim.hasan@gmail.com",
    "days_since_contact": 10,
    "status": "Almost due",
    "tags": ["TRAVEL", "HOBBY"],
    "bio": "School best friend. We used to play cricket every afternoon after class.",
    "goal": 14,
    "next_due_date": "2026-05-08"
  },
  {
    "id": 6,
    "name": "Lisa Nakamura",
    "picture": "https://randomuser.me/api/portraits/women/39.jpg",
    "email": "lisa.nakamura@gmail.com",
    "days_since_contact": 3,
    "status": "On-track",
    "tags": ["WORK", "HOBBY"],
    "bio": "Met through a design workshop. We exchange ideas on UI, branding, and freelance work.",
    "goal": 10,
    "next_due_date": "2026-05-13"
  },
  {
    "id": 7,
    "name": "Michael Brown",
    "picture": "https://randomuser.me/api/portraits/men/41.jpg",
    "email": "michael.brown@gmail.com",
    "days_since_contact": 6,
    "status": "On-track",
    "tags": ["HOBBY", "TRAVEL"],
    "bio": "We play football together every weekend and catch up after matches.",
    "goal": 14,
    "next_due_date": "2026-05-14"
  },
  {
    "id": 8,
    "name": "Nusrat Jahan",
    "picture": "https://randomuser.me/api/portraits/women/60.jpg",
    "email": "nusrat.jahan@gmail.com",
    "days_since_contact": 17,
    "status": "Overdue",
    "tags": ["WORK", "FAMILY"],
    "bio": "Worked on several university group projects together. Great problem solver and planner.",
    "goal": 14,
    "next_due_date": "2026-05-04"
  }
]

const overdueCount = friends.filter((friend) => friend.status === "Overdue").length;
const onCount = friends.filter((friend) => friend.status === "On-track").length;

const Home = () => {
    return (
        <div className='bg-[#F2F2F7] w-full min-h-screen pb-20'>
            <div className='px-4 sm:px-8 md:px-12 lg:px-40 pt-6 lg:pt-15'>

              <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center'>
                Friends to keep close in your life
              </h1>

              <p className='text-[#64748B] text-sm sm:text-base text-center mt-2 px-2 sm:px-6 lg:px-50'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most
              </p>

              <div className='flex justify-center mt-6'>
                <button className='btn bg-[#244D3F] text-white'>+ Add a Friend</button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                <div className="card bg-base-100 shadow-md p-5 text-[#64748B] text-[18px]">
                  <h2 className='font-semibold text-[32px] text-center text-green-800'>{friends.length}</h2>
                  <p className='text-center'>Total Friends</p>
                </div>
                <div className="card bg-base-100 shadow-md p-4 text-[#64748B] text-[18px]">
                  <h2 className='font-semibold text-[32px] text-center text-green-800'>{onCount}</h2>
                  <p className='text-center'>On Track</p>
                </div>
                <div className="card bg-base-100 shadow-md p-4 text-[#64748B] text-[18px]">
                  <h2 className='font-semibold text-[32px] text-center text-green-800'>{overdueCount}</h2>
                  <p className='text-center'>Need Attention</p>
                </div>
                <div className="card bg-base-100 shadow-md p-4 text-[#64748B] text-center text-[18px]">
                  <h2 className='font-semibold text-[32px] text-center text-green-800'>{friends.length}</h2>
                  <p>Interaction This Month</p>
                </div>
              </div>

              <h1 className='font-semibold text-[24px] mt-6'>Your Friends</h1>

              {/* Friend Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 pb-6">
                {friends.map((friend) => (
                  <Link
                    to={`/friends/${friend.id}`}
                    key={friend.id}
                    className="card bg-white shadow-md p-4 rounded-lg pt-8 hover:shadow-xl duration-300 block"
                  >
                    <img
                      src={friend.picture}
                      alt={friend.name}
                      className="w-16 h-16 rounded-full mx-auto"
                    />

                    <h2 className="text-center font-semibold mt-2">
                      {friend.name}
                    </h2>

                    <p className="text-center text-sm text-gray-500 pt-1">
                      {friend.days_since_contact}d ago
                    </p>

                    <div className="flex justify-center gap-1 pt-2 flex-wrap">
                      {friend.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-green-200 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>

                    <p className="text-center text-sm mt-3">
                      <span
                        className={`px-2 py-1 rounded-full text-white ${
                          friend.status === "Overdue"
                            ? "bg-red-600"
                            : friend.status === "Almost due"
                            ? "bg-amber-600"
                            : "bg-green-900"
                        }`}
                      >
                        {friend.status}
                      </span>
                    </p>
                  </Link>
                ))}
              </div>

            </div>
        </div>
    );
};

export default Home;