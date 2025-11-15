import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { Header } from '../../components/Header';

export const OSA: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <div className="flex flex-col gap-6 h-full items-center w-full max-w-[900px]">
        <div className="pt-2 w-full max-w-[600px] items-center flex flex-col gap-3">
          <p className="text-gray-700 text-base">
            OSA via formuläret nedan. Om det inte skulle fungera går det bra att höra av sig
            personligen till någon av oss via telefon eller SMS:
          </p>
          <div className="flex items-center justify-center">
            <ul className="text-xl">
              <li className="flex justify-between gap-2">
                Erika:{' '}
                <div>
                  <span className="mr-1">📞</span>
                  <a href="tel:0046727432007" className="font-bold underline">
                    072-743 20 07
                  </a>
                </div>
              </li>
              <li className="flex justify-between gap-2">
                Mikael:
                <div>
                  <span className="mr-1">📞</span>
                  <a href="tel:0046768234669" className="font-bold underline">
                    076-823 46 69
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfv9QbSk11yUum8_1eOcpPFsFW0u4oHPI5py2dKYEKijEbQxg/viewform?embedded=true"
          width="100%"
          height="100%"
        >
          OSA här
        </iframe>
      </div>
    </PageWrapper>
  );
};
