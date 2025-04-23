import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';

const App = () => {
  const { isCardOpen } = useGlobalContext();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {!isCardOpen && <Countries />}
        {isCardOpen && <CountryDetails />}
      </main>
    </>
  );
};
export default App;
