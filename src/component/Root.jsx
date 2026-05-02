import React from 'react';
import { Outlet } from 'react-router';

const root = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start ml-15">
    <a className="btn btn-ghost text-[24px] font-semibold">keen<span className="text-[#244D3F]">Keeper</span>
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
  </div>
  <div className="navbar-end gap-2 mr-20">
    <a className="btn">Home</a>
    <a className="btn">Timeline</a>
    <a className="btn">Stats</a>
    
  </div>
</div>
            <Outlet></Outlet>
        </div>
    );
};

export default root;