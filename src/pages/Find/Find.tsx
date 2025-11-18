import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { Header } from '../../components/Header';

export const Find: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <p className="text-base">
        <b>Bil</b>: Adressen är Presterudsallén 2, Kristinehamn. Parkering finns i anslutning till
        herrgården.
      </p>
      <p className="text-base">
        <b>Kollektivt</b>: Buss 3 avgår både från Kristinehamns Resecenter läge G och från Södra
        Torget. Hållplats: Presterud. Följ sedan Prestrudsallén som leder till herrgården och till
        campingreceptionen. Tidtabell och info hittas på{' '}
        <a target="_blank" href="https://www.varmlandstrafik.se/" className="underline">
          Värmlands trafiks hemsida
        </a>
      </p>
    </PageWrapper>
  );
};
