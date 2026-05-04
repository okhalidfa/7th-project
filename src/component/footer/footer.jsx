import React from 'react';
import ins from '../../component/lpic/instagram.png'
import fb from '../../component/lpic/facebook.png'
import tw from '../lpic/twitter.png'
const Footer = () => {
  return (
    <footer className="bg-[#1B4D42] text-white w-full  ">

      <div className="flex flex-col items-center py-12 px-6 text-center">
        <h1 className="text-5xl font-bold">KeenKeeper</h1>
        <p className="text-[#FFFFFF] text-[16px] mt-3 text-sm ">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="mt-6 font-semibold text-white">Social Links</p>
        <div className="flex gap-3 mt-3">

          <img src={ins}></img>
          

          <img src={fb}></img>

          <img src={tw}></img>

        </div>
      </div>

      <div className="border-t border-white/20 px-4 sm:px-8 lg:px-20 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-3">

  <p className="text-slate-400 text-sm md:text-base text-center md:text-left">
    © 2026 KeenKeeper. All rights reserved.
  </p>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
    <a href="#" className="text-slate-400 text-sm md:text-base">
      Privacy Policy
    </a>
    <a href="#" className="text-slate-400 text-sm md:text-base">
      Terms of Service
    </a>
    <a href="#" className="text-slate-400 text-sm md:text-base">
      Cookies
    </a>
  </div>

</div>

    </footer>
  );
};

export default Footer;