import React from 'react';
import { Outlet } from 'react-router';
import { Link,NavLink } from "react-router";
import Footer from '../footer/footer';


const root = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
              <div className="navbar-start lg:ml-15 ml-4">
                 <span className='font-semibold text-[24px] '>keen</span><span className='text-[24px] text-[#244D3F] font-semibold'>keeper</span>
    
              </div>
              <div className="navbar-center hidden lg:flex">
              </div>
              <div className="navbar-end gap-2 mr-20 hidden lg:flex">
                 <NavLink to={"/"} className={({isActive})=> isActive ? "text-white bg-[#244D3F] btn " :"btn bg-transparent text-slate-600"}><span className="material-icons">home</span>Home</NavLink>
                 <NavLink to={"/tm"} className={({isActive})=> isActive ? "text-white bg-[#244D3F] btn " :"btn bg-transparent text-slate-600"}><span className="material-icons">schedule</span>Timeline</NavLink>
                 <NavLink to={"/st"} className={({isActive})=> isActive ? "text-white bg-[#244D3F] btn " :"btn bg-transparent text-slate-600"} ><span className="material-icons">bar_chart</span>Stats</NavLink>
              </div>
              <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/tm">Timeline</NavLink></li>
              <li><NavLink to="/st">Stats</NavLink></li>
            </ul>
          </div>
        </div>
            </div>
            <main className="flex-1"> 
              <Outlet />
            </main>

            <Footer />
          </div>
    );
};

export default root;