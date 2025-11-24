import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { Header } from '../../components/Header';
import { ContactsWithTele } from '../../components/ContactsWithTele';
import { ERIKA_CONTACT, MIKAEL_CONTACT } from '../../constants';

export const OSA: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <div className="flex flex-col gap-6 h-full items-center w-full max-w-[900px]">
        <div className="w-full max-w-[600px] items-center flex flex-col gap-3">
          <p className="text-gray-700 text-base">
            OSA via formuläret nedan eller{' '}
            <a target="_blank" href="https://forms.gle/rzAMoUvm3PPBAdRZA" className="underline">
              här
            </a>{' '}
            senast 25 april 2026. Om det inte skulle fungera går det bra att höra av sig personligen
            till någon av oss via telefon eller SMS:
          </p>
          <ContactsWithTele items={[ERIKA_CONTACT, MIKAEL_CONTACT]} />
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfv9QbSk11yUum8_1eOcpPFsFW0u4oHPI5py2dKYEKijEbQxg/viewform?embedded=true"
          width="100%"
          height="100%"
          className="rounded-2xl min-h-[1700px] md:min-h-[1500px]"
        >
          OSA här
        </iframe>
      </div>
    </PageWrapper>
  );
};
