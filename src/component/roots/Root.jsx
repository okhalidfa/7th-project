import React from 'react';
import { Outlet } from 'react-router';
import { Link,NavLink } from "react-router";

const friends=[
  {
    "id": 1,
    "name": "John Doe",
    "picture": "https://randomuser.me/api/portraits/men/32.jpg",
    "email": "john.doe@gmail.com",
    "days_since_contact": 12,
    "status": "almost due",
    "tags": ["college", "close friend"],
    "bio": "Met during university orientation. We still enjoy hiking trips and weekend coffee chats.",
    "goal": 14,
    "next_due_date": "2025-07-20"
  },
  {
    "id": 2,
    "name": "Sarah Ahmed",
    "picture": "https://randomuser.me/api/portraits/women/45.jpg",
    "email": "sarah.ahmed@gmail.com",
    "days_since_contact": 20,
    "status": "overdue",
    "tags": ["office", "mentor"],
    "bio": "Former teammate who helped me grow professionally. We often discuss career goals.",
    "goal": 15,
    "next_due_date": "2025-07-10"
  },
  {
    "id": 3,
    "name": "David Kim",
    "picture": "https://randomuser.me/api/portraits/men/55.jpg",
    "email": "david.kim@gmail.com",
    "days_since_contact": 5,
    "status": "on-track",
    "tags": ["gym", "travel"],
    "bio": "Workout partner who also loves planning budget travel adventures.",
    "goal": 14,
    "next_due_date": "2025-07-28"
  },
  {
    "id": 4,
    "name": "Emma Wilson",
    "picture": "https://randomuser.me/api/portraits/women/22.jpg",
    "email": "emma.wilson@gmail.com",
    "days_since_contact": 13,
    "status": "almost due",
    "tags": ["neighbor", "family friend"],
    "bio": "Grew up in the same neighborhood. We stay connected through family gatherings.",
    "goal": 14,
    "next_due_date": "2025-07-21"
  },
  {
    "id": 5,
    "name": "Rahim Hasan",
    "picture": "https://randomuser.me/api/portraits/men/67.jpg",
    "email": "rahim.hasan@gmail.com",
    "days_since_contact": 25,
    "status": "overdue",
    "tags": ["school", "best friend"],
    "bio": "School best friend. We used to play cricket every afternoon after class.",
    "goal": 14,
    "next_due_date": "2025-07-05"
  },
  {
    "id": 6,
    "name": "Lisa Nakamura",
    "picture": "https://randomuser.me/api/portraits/women/39.jpg",
    "email": "lisa.nakamura@gmail.com",
    "days_since_contact": 3,
    "status": "on-track",
    "tags": ["design", "creative"],
    "bio": "Met through a design workshop. We exchange ideas on UI and branding.",
    "goal": 10,
    "next_due_date": "2025-07-30"
  },
  {
    "id": 7,
    "name": "Michael Brown",
    "picture": "https://randomuser.me/api/portraits/men/41.jpg",
    "email": "michael.brown@gmail.com",
    "days_since_contact": 9,
    "status": "on-track",
    "tags": ["football", "weekend buddy"],
    "bio": "We play football together every weekend and catch up after matches.",
    "goal": 14,
    "next_due_date": "2025-07-24"
  },
  {
    "id": 8,
    "name": "Nusrat Jahan",
    "picture": "https://randomuser.me/api/portraits/women/60.jpg",
    "email": "nusrat.jahan@gmail.com",
    "days_since_contact": 16,
    "status": "overdue",
    "tags": ["university", "project partner"],
    "bio": "Worked on several university group projects together. Great problem solver.",
    "goal": 14,
    "next_due_date": "2025-07-14"
  }
]
const root = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
              <div className="navbar-start ml-15">
                 <span className='font-semibold text-[24px]'>keen</span><span className='text-[24px] text-[#244D3F] font-semibold'>keeper</span>
    
              </div>
              <div className="navbar-center hidden lg:flex">
              </div>
              <div className="navbar-end gap-2 mr-20">
                 <NavLink to={"/"} className={({isActive})=> isActive ? "text-white bg-[#244D3F] btn " :"btn bg-transparent text-slate-600"}><span className="material-icons">home</span>Home</NavLink>
                 <NavLink to={"/tm"} className={({isActive})=> isActive ? "text-white bg-[#244D3F] btn " :"btn bg-transparent text-slate-600"}><span className="material-icons">schedule</span>Timeline</NavLink>
                 <NavLink to={"/st"} className={({isActive})=> isActive ? "text-white bg-[#244D3F] btn " :"btn bg-transparent text-slate-600"} ><span className="material-icons">bar_chart</span>Stats</NavLink>
              </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default root;