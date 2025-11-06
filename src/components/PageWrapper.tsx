import React, { type PropsWithChildren } from 'react';

import blommor1 from '../assets/blommor1.png';
import blommor2 from '../assets/blommor2.png';

export const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center overflow-x-hidden overflow-y-auto relative min-h-[100vh]">
      <div className="flex flex-col items-center gap-2 pt-30 z-20 md:max-w-[800px] lg:max-w-[1200px] max-w-[95%] pl-2 pr-2">
        {children}
      </div>
      <div className="absolute left-0 bottom-0 justify-between w-full hidden md:flex overflow-hidden z-10">
        <img src={blommor2} width="400" alt="" className="-ml-30" />
        <img src={blommor1} width="400" alt="" className="-mr-20" />
      </div>
    </div>
  );
};
