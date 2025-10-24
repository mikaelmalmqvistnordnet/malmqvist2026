import './App.css';
import blommor1 from './assets/blommor1.png';
import blommor2 from './assets/blommor2.png';
import herrgarden from './assets/herrgarden.jpg';

const App = () => {
  return (
    <div className="relative w-[100vw] h-[100vh]">
      <div className="flex flex-col gap-2 pt-30 z-20">
        <h2 className="font-curly">Välkommen på bröllop</h2>
        <h1 className="font-professional-spaced">MIKAEL & ERIKA</h1>
        <h3 className="font-professional-spaced mt-4">25 JULI 2026</h3>
        <div className="pt-10 flex justify-center">
          <div className="max-w-sm rounded-md overflow-hidden shadow-lg min-h-96">
            <img className="w-full" src={herrgarden} alt="Presteruds herrgård" />
            <div className="p-6">
              <div className="font-bold text-xl font-professional mb-2">
                Presteruds Herrgård Kristinehamn
              </div>
              <p className="text-gray-700 text-base">
                Välkommen till vårt bröllop på Presteruds Herrgård i Kristinehamn 25 Juli 2026!
              </p>
            </div>
          </div>
        </div>
        <nav className="pt-2 flex justify-center gap-2">
          <div className="font-bold text-gray-600">OSA</div>
          <div>•</div>
          <div className="font-bold text-gray-600">Hitta hit</div>
          <div>•</div>
          <div className="font-bold text-gray-600">Kontakt</div>
        </nav>
        <div className="pt-8 flex justify-center gap-2">
          <h4 className="font-professional-bold subtitle">För er som reser</h4>
        </div>

        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfv9QbSk11yUum8_1eOcpPFsFW0u4oHPI5py2dKYEKijEbQxg/viewform?embedded=true"
          width="640"
          height="991"
          >
          Loading
          </iframe> */}
      </div>
      <div className="absolute left-0 bottom-0 justify-between w-full hidden sm:flex overflow-hidden">
        <img src={blommor2} width="400" alt="" className="-ml-30" />
        <img src={blommor1} width="400" alt="" className="-mr-20" />
      </div>
    </div>
  );
};

export default App;
