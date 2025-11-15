import { useState } from 'react';
import './Home.css';
import herrgarden from '../../assets/herrgarden.jpg';
import { Header } from '../../components/Header';
import { PageWrapper } from '../../components/PageWrapper';

const Home = () => {
  const [pw, setPw] = useState('');

  if (pw !== 'testmikael123') {
    return (
      <div className="mb-6 w-full pt-10">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border border-grey-500 rounded max-w-[250px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          onChange={(e) => setPw(e.target.value)}
        />
      </div>
    );
  }

  return (
    <PageWrapper>
      <Header />
      <div className="pt-4 md:pt-10 flex justify-center w-[400px]">
        <div className="max-w-2xs md:max-w-sm rounded-md overflow-hidden shadow-lg min-h-96 bg-gray-50 border-gray-50">
          <img className="w-full min-h-48 md:min-h-64" src={herrgarden} alt="Presteruds herrgård" />
          <div className="p-6">
            <div className="font-bold text-xl font-professional mb-2">
              Presteruds Herrgård Kristinehamn
            </div>
            <p className="text-gray-700">
              Välkommen till vårt bröllop på Presteruds Herrgård i Kristinehamn 25 Juli 2026!
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8 flex justify-center gap-2 flex-col">
        <h4 className="font-professional-bold subtitle">Info</h4>
        <p className="text-base">
          Vigseln kommer äga rum utomhus, medan middagen och festen är under tak
        </p>
        <p className="text-base">Klädkod</p>
        <p className="text-base">Adress</p>
        <p className="text-base">Parkering finns runt herrgården</p>
      </div>
      <div className="pt-8 flex justify-center gap-2 flex-col">
        <h4 className="font-professional-bold subtitle">För er som reser</h4>
        <p className="text-base">Åka tåg</p>
        <p className="text-base">Ta er ut till Presteruds herrgård kollektivt</p>
        <p className="text-base">Boka boende osv</p>
      </div>
      <div className="pt-8 flex justify-center gap-2 flex-col">
        <h4 className="font-professional-bold subtitle">Kontakt</h4>
        <p className="text-base">
          Vill ni hålla tal, en presentation, ett uppträdande eller bara undrar något så kan ni
          kontakta våra toast madammes
        </p>
        <p className="text-base">Boka boende osv</p>
      </div>
    </PageWrapper>
  );
};

export default Home;
