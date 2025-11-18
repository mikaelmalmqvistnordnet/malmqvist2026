import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { Header } from '../../components/Header';
import { ContactsWithTele } from '../../components/ContactsWithTele';
import { INA_CONTACT, LIZETTE_CONTACT } from '../../constants';

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
          <ContactsWithTele items={[INA_CONTACT, LIZETTE_CONTACT]} />
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
