import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { Header } from '../../components/Header';
import { ContactsWithTele } from '../../components/ContactsWithTele';
import { ERIKA_CONTACT, INA_CONTACT, LIZETTE_CONTACT, MIKAEL_CONTACT } from '../../constants';

export const Contact: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <div className="flex flex-col gap-6 h-full items-center w-full max-w-[900px]">
        <p className="text-gray-700 text-base">
          Nedan hittar du telefonnummer till oss och våra grymma toastmadamer Ina och Lizette. Om du
          behöver kontakta oss under själva bröllopsdagen ber vi er att gå via Ina eller Lizette.
        </p>
        <ContactsWithTele items={[ERIKA_CONTACT, MIKAEL_CONTACT]} />
        <ContactsWithTele items={[INA_CONTACT, LIZETTE_CONTACT]} />
      </div>
    </PageWrapper>
  );
};
