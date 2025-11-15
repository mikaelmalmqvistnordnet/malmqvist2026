import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { Header } from '../../components/Header';

export const OSA: React.FC = () => {
  return (
    <PageWrapper>
      <Header />

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfv9QbSk11yUum8_1eOcpPFsFW0u4oHPI5py2dKYEKijEbQxg/viewform?embedded=true"
        width="100%"
        height="100%"
      >
        OSA här
      </iframe>
    </PageWrapper>
  );
};
