import React, { type PropsWithChildren } from 'react';
import flowersBottomRight from '../assets/flowers-bottom-right.png';
import flowersTopLeft from '../assets/flowers-top-left.png';

export const FlowersAroundName: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex relative w-full md:max-w-[900px] items-center justify-center">
      <img
        src={flowersTopLeft}
        width="200"
        alt=""
        className="absolute -top-[60px] -left-[75px] md:-top-[90px] md:-left-[20px] md:opacity-100 opacity-50"
      />
      <img
        src={flowersBottomRight}
        width="250"
        alt=""
        className="absolute -bottom-[60px] -right-[60px] md:-bottom-[80px] md:right-[15px] md:opacity-100 opacity-50"
      />
      {children}
    </div>
  );
};
