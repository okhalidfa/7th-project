import React from 'react';

const Home = () => {
    return (
        <div className='bg-[#F2F2F7] w-full h-1200'>
            <div className='mx-70 pt-15'>
              <h1 className='font-bold text-[48px] justify-between text-center'>Friends to keep close in your life</h1>
              <p className='text-[16px] text-[#64748B] px-50'>Your personal shelf of meaningful connections. Browse, tend, and nurture the .</p>
              <p className='text-[16px] text-[#64748B] px-90'>relationships that matter most</p>
              <button className='mx-95 mt-6 btn bg-[#244D3F] text-white'>+ Add a Friend</button>
              <div className="grid grid-cols-4 gap-15 py-6 justify-between text-center">

                 <div className="card bg-base-100 shadow-md p-7 w-55 h-30 text-[#64748B] text-[18px]">
                   10
                   <p>Total Friends</p>
                 </div>

                 <div className="card bg-base-100 shadow-md p-7 w-55 h-30 text-[#64748B] text-[18px]">
                   3
                   <p>On Track</p>
                 </div>

                 <div className="card bg-base-100 shadow-md p-7 w-55 h-30 text-[#64748B] text-[18px]">
                   6
                   <p>Need Attention</p>
                 </div>

                 <div className="card bg-base-100 shadow-md p-4 w-55 h-30 text-[#64748B] text-center pt-6 text-[18px]">
                   12
                   <p>Interaction This Month</p>
                 </div>

               </div>
               <h1 className='font-semibold text-[24]'>Your Friends</h1>

            </div>
        </div>
    );
};

export default Home;