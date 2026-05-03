import React from 'react';
export const friends = [
  {
    id: 1,
    name: "John Doe",
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    daysSinceContact: 12,
    status: "Almost due",
    tags: ["WORK", " FAMILY"]
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    picture: "https://randomuser.me/api/portraits/women/45.jpg",
    daysSinceContact: 20,
    status: "Overdue",
    tags: ["WORK"]
  },
  {
    id: 3,
    name: "David Kim",
    picture: "https://randomuser.me/api/portraits/men/55.jpg",
    daysSinceContact: 5,
    status: "Almost due",
    tags: ["WORK"]
  },
  {
    id: 4,
    name: "Emma Wilson",
    picture: "https://randomuser.me/api/portraits/women/22.jpg",
    daysSinceContact: 13,
    status: "Almost due",
    tags: ["FAMILY"]
  },
  {
    id: 5,
    name: "Rahim Hasan",
    picture: "https://randomuser.me/api/portraits/men/67.jpg",
    daysSinceContact: 25,
    status: "Overdue",
    tags: ["HOME", " TRAVEL"]
  },
  {
    id: 6,
    name: "Lisa Nakamura",
    picture: "https://randomuser.me/api/portraits/women/39.jpg",
    daysSinceContact: 3,
    status: "On-track",
    tags: ["FAMILY"]
  },
  {
    id: 7,
    name: "Michael Brown",
    picture: "https://randomuser.me/api/portraits/men/41.jpg",
    daysSinceContact: 9,
    status: "On-track",
    tags: ["HOME","TRAVEL"]
  },
  {
    id: 8,
    name: "Nusrat Jahan",
    picture: "https://randomuser.me/api/portraits/women/60.jpg",
    daysSinceContact: 16,
    status: "Overdue",
    tags: ["FAMILY"]
  }
];
const overdueCount = friends.filter(
  (friend) => friend.status === "Overdue"
).length;
const onCount = friends.filter(
  (friend) => friend.status === "On-track"
).length;
const Home = () => {
    return (
        <div className='bg-[#F2F2F7] w-100% h-100% pb-20'>
            <div className='mx-70 pt-15'>
              <h1 className='font-bold text-[48px] justify-between text-center'>Friends to keep close in your life</h1>
              <p className='text-[16px] text-[#64748B] px-50'>Your personal shelf of meaningful connections. Browse, tend, and nurture the .</p>
              <p className='text-[16px] text-[#64748B] px-90'>relationships that matter most</p>
              <button className='mx-95 mt-6 btn bg-[#244D3F] text-white'>+ Add a Friend</button>
              <div className="grid grid-cols-4 gap-15 py-6 justify-between text-center">

                 <div className="card bg-base-100 shadow-md p-5 w-55 h-30 text-[#64748B] text-[18px]">
                   <h2 className='font-semibold text-[32px] text-center text-green-800 '>{friends.length}</h2>
                   <p>Total Friends</p>
                 </div>

                 <div className="card bg-base-100 shadow-md p-4 w-55 h-30 text-[#64748B] text-[18px]">
                    <h2 className='font-semibold text-[32px] text-center text-green-800 '>{onCount}</h2>

                   <p>On Track</p>
                 </div>

                 <div className="card bg-base-100 shadow-md p-4 w-55 h-30 text-[#64748B] text-[18px]">
                    <h2 className='font-semibold text-[32px] text-center text-green-800 '>{overdueCount}</h2>

                   <p>Need Attention</p>
                 </div>

                 <div className="card bg-base-100 shadow-md p-4 w-55 h-30 text-[#64748B] text-center pt-6 text-[18px]">
                   <h2 className='font-semibold text-[32px] text-center text-green-800 '>{friends.length}</h2>
                   <p>Interaction This Month</p>
                 </div>

               </div>
               <h1 className='font-semibold text-[24px] mt-6'>Your Friends</h1>

               <div className="grid grid-cols-4 gap-6 mt-4 w-250 h-130">
                 {friends.map((friend) => (
                   <div key={friend.id} className="card bg-white shadow-md p-4 rounded-lg pt-8">
      
                     <img
                       src={friend.picture}
                       alt={friend.name}
                       className="w-16 h-16 rounded-full mx-auto"
                     />

                     <h2 className="text-center font-semibold mt-2">
                                      {friend.name}
                     </h2>

                     <p className="text-center text-sm text-gray-500 pt-1">
                       {friend.daysSinceContact}d ago
                     </p>

                     <p className='text-center justify-center  flex rounded-full gap-1 pt-2'>{friend.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-200 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag.trim()}
                    </span>
                  ))}</p>

                     <p className="text-center text-sm mt-3">
                     <span className={`px-2 py-1 rounded-full text-white ${friend.status ==="Overdue"? "bg-red-600 ": friend.status=== "Almost due" ? "bg-amber-600" : "bg-green-900"}`}>{friend.status}</span>
                     </p>


                    </div>
                 ))}
        </div>
               

        </div>

 
        </div>
    );
};
export default Home;