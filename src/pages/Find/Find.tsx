import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { Header } from '../../components/Header';

export const Find: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <p className="text-base">
        <b>Bil</b>: Adressen är{' '}
        <a target="_blank" href="https://maps.app.goo.gl/KUMAgtJja5DVwkSx6" className="underline">
          <address className="inline">Presterudsallén 2, Kristinehamn</address>
        </a>
        . Parkering finns i anslutning till herrgården.
      </p>
      <p className="text-base">
        <b>Kollektivt</b>: Ta buss 3 från <strong>Kristinehamns Resecenter läge G</strong> eller
        från <strong>Södra Torget</strong> till hållplats: <strong>Presterud</strong>. Följ sedan
        Prestrudsallén som leder till herrgården och till campingreceptionen. Tidtabell och info
        hittas på{' '}
        <a target="_blank" href="https://www.varmlandstrafik.se/" className="underline">
          Värmlands trafiks hemsida
        </a>
      </p>
    </PageWrapper>
  );
};
