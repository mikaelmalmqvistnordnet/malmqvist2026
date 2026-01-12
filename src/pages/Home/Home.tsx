import './Home.css';
import herrgarden from '../../assets/herrgarden.jpg';
import ringar from '../../assets/ringar.png';
import vi from '../../assets/vi.jpg';
import { Header } from '../../components/Header';
import { PageWrapper } from '../../components/PageWrapper';
import { CopyIcon } from '../../components/CopyIcon';

const Home = () => {
  return (
    <>
      <PageWrapper>
        <Header />
        <div className="pt-4 md:pt-10 flex justify-center w-[400px]">
          <div className="max-w-2xs md:max-w-sm rounded-md overflow-hidden shadow-lg min-h-96 bg-white relative">
            <img
              className="w-full min-h-48 md:min-h-64"
              src={herrgarden}
              alt="Presteruds herrgård"
            />
            <img
              className="rounded-full border-2 border-amber-300 w-[64px] md:w-[96px] absolute left-[calc(50%-32px)] md:left-[calc(50%-48px)] md:top-[210px] top-[160px]"
              src={ringar}
              alt="Ringar"
            />
            <div className="md:p-6 md:pt-14 pt-8 p-2">
              <div className="font-bold text-xl font-professional mb-2">
                Presteruds Herrgård Kristinehamn
              </div>
              <p className="text-gray-700">
                Välkommen till vårt bröllop på Presteruds Herrgård i Kristinehamn 25 Juli 2026!
              </p>
            </div>
          </div>
        </div>
        <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
          <h3 className="font-professional-bold subtitle">Info</h3>
          <p className="text-base md:pt-3">
            Om vädret tillåter hålls vigseln utomhus i trädgårdsparken. Vigseln följs av mingel där
            det finns möjlighet att bada, spela spel, dansa eller bara ta det lugnt med god dryck i
            hand. Vad som än föredras! Middagen hålls inne i trädgårdstältet innan vi framåt kvällen
            rör oss inåt i herrgården för efterföljande dans och fest.
          </p>
          <p className="text-base md:pt-3">
            För enkelhetens skull har vi avgränsat gästlistan till de namn som står på inbjudan.
            Inbjudan gäller alltså inte +1.
          </p>
        </div>
        <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
          <h3 className="font-professional-bold subtitle">Klädkod: Kavaj</h3>
          <p className="text-base md:pt-3">
            Tänk ”festfin”. Kostym i valfri färg, klänning, byxdress eller blus med kjol eller
            byxor. Eftersom vi kommer vara utomhus på en gräsmatta rekommenderas skor som inte har
            en alltför smal klack!
          </p>
          <p className="text-base">
            Hur mycket vi än önskar kan vi tyvärr inte styra över vädrets makter så ett paraply kan
            eventuellt vara bra att ha. Ta gärna med badkläder också!
          </p>
        </div>
        <div
          className="w-full rounded-md shadow-lg md:mt-8 mt-4 p-4 md:p-10 z-50 relative bg-white!"
          style={{ background: 'white' }}
        >
          <img className="rounded-sm shadow-none!" src={vi} alt="vi" />
        </div>
        <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
          <h4 className="font-professional-bold subtitle">Boende</h4>
          <p className="text-base md:pt-3">
            Precis intill herrgården ligger campingen First Camp Herrgårdsliv med finfina stugor och
            andra alternativ. De är alla på ca 5 minuters gångavstånd från bröllopslokalen. Boka på{' '}
            <a
              target="_blank"
              href="https://firstcamp.se/destinationer/herrgardsliv-kristinehamn"
              className="underline"
            >
              First Camps hemsida
            </a>{' '}
            och ange koden{' '}
            <button
              onClick={() => navigator.clipboard.writeText('EM171996')}
              className="inline-flex items-center gap-1 font-semibold hover:cursor-pointer active:text-gray-400"
              title="Kopiera koden"
            >
              EM171996 <CopyIcon />
            </button>{' '}
            så får ni 10% rabatt. Det finns såklart hotell och andra boendemöjligheter i
            Kristinehamn, men vi rekommenderar starkt campingen.
          </p>
        </div>
        <div className="md:pt-8 pt-6 flex justify-center gap-2 flex-col">
          <h4 className="font-professional-bold subtitle">Hitta hit</h4>
          <p className="text-base md:pt-3">
            <b>Bil</b>: Adressen är{' '}
            <a
              target="_blank"
              href="https://maps.app.goo.gl/KUMAgtJja5DVwkSx6"
              className="underline"
            >
              <address className="inline">Presterudsallén 2, Kristinehamn</address>
            </a>
            . Parkering finns i anslutning till herrgården.
          </p>
          <p className="text-base">
            <b>Kollektivt</b>: Buss 3 avgår både från Kristinehamns Resecenter läge G och från Södra
            Torget. Hållplats: Presterud. Följ sedan Prestrudsallén som leder till herrgården och
            till campingreceptionen (ca 5 minuters gångavstånd). Tidtabell och info hittas på{' '}
            <a target="_blank" href="https://www.varmlandstrafik.se/" className="underline">
              Värmlandstrafiks hemsida
            </a>
          </p>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
