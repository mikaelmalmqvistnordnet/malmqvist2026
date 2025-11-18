import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { Header } from '../../components/Header';

export const Speach: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <div className="flex flex-col gap-6 h-full items-center w-full max-w-[900px]">
        <div className="pt-2 w-full max-w-[600px] items-center flex flex-col gap-3">
          <p className="text-gray-700 text-base">
            Vill du hålla tal, göra en presentation eller annat framträdande under bröllopet vill vi
            gärna att du anmäler detta i god tid innan så att våra toastmadamer vet om det. Anmäl
            via formuläret nedan eller via{' '}
            <a target="_blank" href="https://forms.gle/ZqSi8wfAJpwW2A2U7" className="underline">
              denna länken
            </a>
            . Om det inte skulle fungera går det bra att höra av sig personligen till någon av våra
            toastmadamer:
          </p>
          <div className="flex items-center justify-center">
            <ul className="text-xl">
              <li className="flex justify-between gap-2">
                Ina:{' '}
                <div>
                  <span className="mr-1">📞</span>
                  <a href="tel:0704379485" className="font-bold underline">
                    070-437 94 85
                  </a>
                </div>
              </li>
              <li className="flex justify-between gap-2">
                Lizette:
                <div>
                  <span className="mr-1">📞</span>
                  <a href="tel:0762773934" className="font-bold underline">
                    076-277 39 34
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSctJeMghgs1EYckI0VmOH3iC4GxSBUGzUkDWfgucK5eXYsgng/viewform?embedded=true"
          width="100%"
          height="100%"
          className="rounded-2xl min-h-[1200px] md:min-h-[900px]"
        >
          Anmäl tal
        </iframe>
      </div>
    </PageWrapper>
  );
};
