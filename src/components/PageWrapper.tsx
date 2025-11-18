import React, { type PropsWithChildren } from 'react';

import blommor1 from '../assets/blommor1.png';
import blommor2 from '../assets/blommor2.png';

export const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center overflow-x-hidden overflow-y-auto relative min-h-[100vh] pb-14">
      <div className="absolute left-0 top-0 rotate-180 justify-between w-full flex overflow-hidden z-10 opacity-70 md:opacity-100">
        <img src={blommor2} width="400" alt="" className="-ml-30" />
      </div>
      <div className="absolute -right-10 top-[33%] justify-between w-full flex overflow-hidden z-10 opacity-60 md:opacity-100">
        <img src={blommor2} width="400" alt="" className="rotate-180" />
      </div>
      <div className="absolute left-0 top-[50%] justify-between w-full flex overflow-hidden z-10 opacity-60 md:opacity-100">
        <img src={blommor1} width="400" alt="" className="-ml-60" />
      </div>
      <div className="flex flex-col items-center gap-2 pt-6 md:pt-30 z-20 md:max-w-[800px] max-w-[95%] pl-2 pr-2">
        {children}
      </div>
      <div className="absolute left-0 bottom-0 justify-between w-full flex overflow-hidden z-10 opacity-60 md:opacity-100">
        <img src={blommor2} width="400" alt="" className="-ml-30" />
        <img src={blommor1} width="400" alt="" className="-mr-20" />
      </div>
    </div>
  );
};
